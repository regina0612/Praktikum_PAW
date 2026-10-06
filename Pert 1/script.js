const formBarang = document.getElementById("formBarang");

const namaBarang = document.getElementById("namaBarang");
const hargaBarang = document.getElementById("hargaBarang");
const qtyBarang = document.getElementById("qtyBarang");

const errorNama = document.getElementById("errorNama");
const errorHarga = document.getElementById("errorHarga");
const errorQty = document.getElementById("errorQty");

const tabelKeranjang = document.getElementById("tabelKeranjang");
const keranjangKosong = document.getElementById("keranjangKosong");
const jumlahItem = document.getElementById("jumlahItem");

const totalBelanja = document.getElementById("totalBelanja");
const nominalDiskon = document.getElementById("nominalDiskon");
const totalAkhir = document.getElementById("totalAkhir");

const uangBayar = document.getElementById("uangBayar");
const statusPembayaran = document.getElementById("statusPembayaran");
const kembalian = document.getElementById("kembalian");

const btnSelesai = document.getElementById("btnSelesai");
const btnReset = document.getElementById("btnReset");

const tabelRiwayat = document.getElementById("tabelRiwayat");
const riwayatKosong = document.getElementById("riwayatKosong");
const jumlahRiwayat = document.getElementById("jumlahRiwayat");

let keranjang = JSON.parse(
    localStorage.getItem("keranjang")
) || [];

let riwayat = JSON.parse(
    localStorage.getItem("riwayat")
) || [];

function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}

function validasiForm() {
    errorNama.textContent = "";
    errorHarga.textContent = "";
    errorQty.textContent = "";

    let valid = true;

    const nama = namaBarang.value.trim();

    if (nama === "") {
        errorNama.textContent =
            "Nama barang wajib diisi.";
        valid = false;
    } else if (nama.length < 3) {
        errorNama.textContent =
            "Nama barang minimal 3 karakter.";
        valid = false;
    }

    const harga = Number(hargaBarang.value);

    if (hargaBarang.value === "") {
        errorHarga.textContent =
            "Harga wajib diisi.";
        valid = false;
    } else if (harga < 500) {
        errorHarga.textContent =
            "Harga minimal Rp 500.";
        valid = false;
    }

    const qty = Number(qtyBarang.value);

    if (qtyBarang.value === "") {
        errorQty.textContent =
            "Jumlah barang wajib diisi.";
        valid = false;
    } else if (!Number.isInteger(qty) || qty < 1) {
        errorQty.textContent =
            "Qty harus berupa angka bulat minimal 1.";
        valid = false;
    }

    return valid;
}

formBarang.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        if (!validasiForm()) {
            return;
        }

        const barang = {
            nama: namaBarang.value.trim(),
            harga: Number(hargaBarang.value),
            qty: Number(qtyBarang.value)
        };

        keranjang.push(barang);

        simpanKeranjang();

        tampilkanKeranjang();

        formBarang.reset();

        errorNama.textContent = "";
        errorHarga.textContent = "";
        errorQty.textContent = "";
    }
);

function simpanKeranjang() {
    localStorage.setItem(
        "keranjang",
        JSON.stringify(keranjang)
    );
}

function tampilkanKeranjang() {
    tabelKeranjang.innerHTML = "";

    if (keranjang.length === 0) {
        keranjangKosong.style.display = "block";
        jumlahItem.textContent = "0 Item";
        return;
    }

    keranjangKosong.style.display = "none";

    jumlahItem.textContent =
        `${keranjang.length} Item`;

    keranjang.forEach(
        function(barang, index) {
            const subtotal =
                barang.harga * barang.qty;

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${barang.nama}</td>
                <td>${formatRupiah(barang.harga)}</td>
                <td>${barang.qty}</td>
                <td>${formatRupiah(subtotal)}</td>
                <td>
                    <button
                        class="btn-delete"
                        onclick="hapusBarang(${index})">
                        Hapus
                    </button>
                </td>
            `;

            tabelKeranjang.appendChild(row);
        }
    );

    hitungTotal();
}

function hapusBarang(index) {
    keranjang.splice(index, 1);

    simpanKeranjang();

    tampilkanKeranjang();

    if (keranjang.length === 0) {
        resetRingkasan();
    }
}

function hitungTotal() {
    let total = 0;

    keranjang.forEach(
        function(barang) {
            total +=
                barang.harga * barang.qty;
        }
    );

    let diskon = 0;

    if (total >= 50000) {
        diskon = total * 0.10;
    }

    const akhir =
        total - diskon;

    totalBelanja.textContent =
        formatRupiah(total);

    nominalDiskon.textContent =
        formatRupiah(diskon);

    totalAkhir.textContent =
        formatRupiah(akhir);

    hitungKembalian();
}

uangBayar.addEventListener(
    "input",
    hitungKembalian
);

function hitungKembalian() {
    if (keranjang.length === 0) {
        kembalian.textContent = "Rp 0";
        statusPembayaran.textContent = "";
        statusPembayaran.className =
            "payment-status";
        return;
    }

    let total = 0;

    keranjang.forEach(
        function(barang) {
            total +=
                barang.harga * barang.qty;
        }
    );

    let diskon = 0;

    if (total >= 50000) {
        diskon = total * 0.10;
    }

    const akhir =
        total - diskon;

    const bayar =
        Number(uangBayar.value);

    if (uangBayar.value === "") {
        kembalian.textContent = "Rp 0";
        statusPembayaran.textContent = "";
        statusPembayaran.className =
            "payment-status";
        return;
    }

    if (bayar < akhir) {
        const kurang =
            akhir - bayar;

        kembalian.textContent =
            "Rp 0";

        statusPembayaran.textContent =
            `Uang belum mencukupi. Kurang ${formatRupiah(kurang)}.`;

        statusPembayaran.className =
            "payment-status error";

        return;
    }

    const hasilKembalian =
        bayar - akhir;

    kembalian.textContent =
        formatRupiah(hasilKembalian);

    statusPembayaran.textContent =
        "Pembayaran mencukupi.";

    statusPembayaran.className =
        "payment-status success";
}

function resetRingkasan() {
    totalBelanja.textContent =
        "Rp 0";

    nominalDiskon.textContent =
        "Rp 0";

    totalAkhir.textContent =
        "Rp 0";

    uangBayar.value = "";

    kembalian.textContent =
        "Rp 0";

    statusPembayaran.textContent = "";

    statusPembayaran.className =
        "payment-status";
}

btnSelesai.addEventListener(
    "click",
    function() {
        if (keranjang.length === 0) {
            alert(
                "Keranjang masih kosong."
            );
            return;
        }

        let total = 0;

        keranjang.forEach(
            function(barang) {
                total +=
                    barang.harga * barang.qty;
            }
        );

        let diskon = 0;

        if (total >= 50000) {
            diskon = total * 0.10;
        }

        const akhir =
            total - diskon;

        const bayar =
            Number(uangBayar.value);

        if (uangBayar.value === "") {
            alert(
                "Masukkan uang pembayaran terlebih dahulu."
            );
            return;
        }

        if (bayar < akhir) {
            alert(
                "Uang pembayaran belum mencukupi."
            );
            return;
        }

        const hasilKembalian =
            bayar - akhir;

        const transaksi = {
            totalBelanja: total,
            diskon: diskon,
            totalAkhir: akhir,
            uangBayar: bayar,
            kembalian: hasilKembalian
        };

        riwayat.push(transaksi);

        localStorage.setItem(
            "riwayat",
            JSON.stringify(riwayat)
        );

        tampilkanRiwayat();

        keranjang = [];

        localStorage.removeItem(
            "keranjang"
        );

        tampilkanKeranjang();

        resetRingkasan();

        alert(
            "Transaksi berhasil disimpan."
        );
    }
);

btnReset.addEventListener(
    "click",
    function() {
        const konfirmasi =
            confirm(
                "Yakin ingin membuat transaksi baru?"
            );

        if (!konfirmasi) {
            return;
        }

        keranjang = [];

        localStorage.removeItem(
            "keranjang"
        );

        tampilkanKeranjang();

        resetRingkasan();
    }
);

function tampilkanRiwayat() {
    tabelRiwayat.innerHTML = "";

    if (riwayat.length === 0) {
        riwayatKosong.style.display =
            "block";

        jumlahRiwayat.textContent =
            "0 Transaksi";

        return;
    }

    riwayatKosong.style.display =
        "none";

    jumlahRiwayat.textContent =
        `${riwayat.length} Transaksi`;

    riwayat.forEach(
        function(transaksi, index) {
            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>
                    ${formatRupiah(
                        transaksi.totalBelanja
                    )}
                </td>
                <td>
                    ${formatRupiah(
                        transaksi.diskon
                    )}
                </td>
                <td>
                    ${formatRupiah(
                        transaksi.totalAkhir
                    )}
                </td>
                <td>
                    ${formatRupiah(
                        transaksi.uangBayar
                    )}
                </td>
                <td>
                    ${formatRupiah(
                        transaksi.kembalian
                    )}
                </td>
            `;

            tabelRiwayat.appendChild(row);
        }
    );
}

tampilkanKeranjang();

if (keranjang.length === 0) {
    resetRingkasan();
}

tampilkanRiwayat();