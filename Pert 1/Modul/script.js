console.log("LATIHAN 1 - DASAR JAVASCRIPT");
let nama = "Regina";
let umur = 19;
let nim = "123456789";
let jurusan = "Teknik Informatika";
let nilai = 85;
console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("NIM:", nim);
console.log("Jurusan:", jurusan);
console.log("Nilai:", nilai);
if (nilai >= 60) {
    console.log("Status: Lulus");
} else {
    console.log("Status: Tidak Lulus");
}
if (umur < 18) {
    console.log("Kategori: Anak-anak");
} else if (umur <= 25) {
    console.log("Kategori: Remaja");
} else {
    console.log("Kategori: Dewasa");
}
let hari = 3;
switch (hari) {
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    case 7:
        console.log("Minggu");
        break;
    default:
        console.log("Hari tidak valid");
}
let grade = nilai >= 80 ? "A" : nilai >= 70 ? "B" : nilai >= 60 ? "C" : "D";
console.log("Grade:", grade);
console.log("LATIHAN 2 - LOOP DAN FUNCTION");
let angka = 5;
for (let i = 1; i <= 10; i++) {
    console.log(angka + " x " + i + " = " + angka * i);
}
function faktorial(n) {
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}
console.log("Faktorial 5:", faktorial(5));
function cekPrima(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Apakah 17 prima?", cekPrima(17));
let berat = prompt("Masukkan berat badan (kg):");
let tinggi = prompt("Masukkan tinggi badan (m):");
let bmi = berat / (tinggi * tinggi);
console.log("BMI:", bmi);
document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "b") {
        console.log("BMI:", bmi);
    }
});
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("LATIHAN 3 - MAHASISWA DAN CRUD");
let dataMahasiswa = [
    { nama: "Regina", nim: "123", nilai: 85 },
    { nama: "Andi", nim: "124", nilai: 75 },
    { nama: "Budi", nim: "125", nilai: 90 },
    { nama: "Citra", nim: "126", nilai: 65 },
    { nama: "Dina", nim: "127", nilai: 80 }
];
function tampilkanTabelMahasiswa(data) {
    console.table(data);
}
function cariMahasiswaTertinggi(data) {
    let tertinggi = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i].nilai > tertinggi.nilai) {
            tertinggi = data[i];
        }
    }
    return tertinggi;
}
function cariDiAtasRataRata(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i].nilai;
    }
    let rataRata = total / data.length;
    return data.filter(function(mahasiswa) {
        return mahasiswa.nilai > rataRata;
    });
}
function urutkanNama(data) {
    return [...data].sort(function(a, b) {
        return a.nama.localeCompare(b.nama);
    });
}
tampilkanTabelMahasiswa(dataMahasiswa);
console.log("Mahasiswa dengan nilai tertinggi:", cariMahasiswaTertinggi(dataMahasiswa));
console.log("Mahasiswa di atas rata-rata:", cariDiAtasRataRata(dataMahasiswa));
console.log("Urutan berdasarkan nama:", urutkanNama(dataMahasiswa));
function tambahMahasiswa(nama, nim, nilai) {
    dataMahasiswa.push({
        nama: nama,
        nim: nim,
        nilai: nilai
    });
}
function updateMahasiswa(nim, nilaiBaru) {
    let mahasiswa = dataMahasiswa.find(function(data) {
        return data.nim === nim;
    });
    if (mahasiswa) {
        mahasiswa.nilai = nilaiBaru;
    }
}
function hapusMahasiswa(nim) {
    dataMahasiswa = dataMahasiswa.filter(function(data) {
        return data.nim !== nim;
    });
}
tambahMahasiswa("Eka", "128", 88);
updateMahasiswa("124", 95);
hapusMahasiswa("126");
tampilkanTabelMahasiswa(dataMahasiswa);
console.log("LATIHAN 4");
let mahasiswaStorage = JSON.parse(localStorage.getItem("mahasiswa")) || [];
function simpanMahasiswa() {
    localStorage.setItem("mahasiswa", JSON.stringify(mahasiswaStorage));
}
function tampilkanMahasiswaStorage() {
    console.table(mahasiswaStorage);
}
function tambahMahasiswaStorage(nama, nim, jurusan) {
    mahasiswaStorage.push({
        nama: nama,
        nim: nim,
        jurusan: jurusan
    });
    simpanMahasiswa();
}
function hapusMahasiswaStorage(nim) {
    mahasiswaStorage = mahasiswaStorage.filter(function(mahasiswa) {
        return mahasiswa.nim !== nim;
    });
    simpanMahasiswa();
}
tampilkanMahasiswaStorage();
let posts = [];
let halaman = 1;
let search = "";
async function ambilPost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await response.json();
    tampilkanPost();
}
function tampilkanPost() {
    let hasil = posts.filter(function(post) {
        return post.title.toLowerCase().includes(search.toLowerCase());
    });
    let mulai = (halaman - 1) * 5;
    let data = hasil.slice(mulai, mulai + 5);
    console.table(data);
}
function cariPost(keyword) {
    search = keyword;
    halaman = 1;
    tampilkanPost();
}
function halamanBerikutnya() {
    halaman++;
    tampilkanPost();
}
function halamanSebelumnya() {
    if (halaman > 1) {
        halaman--;
        tampilkanPost();
    }
}
let todo = JSON.parse(localStorage.getItem("todo")) || [];
function simpanTodo() {
    localStorage.setItem("todo", JSON.stringify(todo));
}
function tambahTodo(text) {
    todo.push({
        id: Date.now(),
        text: text,
        selesai: false
    });
    simpanTodo();
}
function hapusTodo(id) {
    todo = todo.filter(function(item) {
        return item.id !== id;
    });
    simpanTodo();
}
function ubahStatusTodo(id) {
    let item = todo.find(function(data) {
        return data.id === id;
    });
    if (item) {
        item.selesai = !item.selesai;
    }
    simpanTodo();
}
document.body.innerHTML = `
<div style="font-family: Arial; max-width: 900px; margin: auto; padding: 20px;">
    <h1>Latihan JavaScript</h1>
    <h2>Data Mahasiswa</h2>
    <input id="namaMahasiswa" placeholder="Nama">
    <input id="nimMahasiswa" placeholder="NIM">
    <input id="jurusanMahasiswa" placeholder="Jurusan">
    <button id="tambahMahasiswa">Tambah</button>
    <div id="daftarMahasiswa"></div>
    <h2>Posts API</h2>
    <input id="searchPost" placeholder="Cari post">
    <button id="cariPost">Cari</button>
    <button id="sebelumnya">Sebelumnya</button>
    <button id="berikutnya">Berikutnya</button>
    <div id="daftarPost"></div>
    <h2>Todo List</h2>
    <input id="todoInput" placeholder="Todo">
    <button id="tambahTodo">Tambah</button>
    <div id="daftarTodo"></div>
</div>
`;
function renderMahasiswa() {
    let container = document.getElementById("daftarMahasiswa");
    container.innerHTML = "";
    mahasiswaStorage.forEach(function(mahasiswa) {
        let div = document.createElement("div");
        div.innerHTML = mahasiswa.nama + " - " + mahasiswa.nim + " - " + mahasiswa.jurusan + " ";
        let button = document.createElement("button");
        button.textContent = "Hapus";
        button.onclick = function() {
            hapusMahasiswaStorage(mahasiswa.nim);
            renderMahasiswa();
        };
        div.appendChild(button);
        container.appendChild(div);
    });
}
function renderPost() {
    let hasil = posts.filter(function(post) {
        return post.title.toLowerCase().includes(search.toLowerCase());
    });
    let mulai = (halaman - 1) * 5;
    let data = hasil.slice(mulai, mulai + 5);
    let container = document.getElementById("daftarPost");
    container.innerHTML = "";
    data.forEach(function(post) {
        let div = document.createElement("div");
        div.innerHTML = "<p><b>" + post.id + ". " + post.title + "</b></p>";
        container.appendChild(div);
    });
}
function renderTodo() {
    let container = document.getElementById("daftarTodo");
    container.innerHTML = "";
    todo.forEach(function(item) {
        let div = document.createElement("div");
        div.innerHTML = `
            <input type="checkbox" ${item.selesai ? "checked" : ""}>
            <span>${item.text}</span>
            <button>Hapus</button>
        `;
        div.querySelector("input").onchange = function() {
            ubahStatusTodo(item.id);
            renderTodo();
        };
        div.querySelector("button").onclick = function() {
            hapusTodo(item.id);
            renderTodo();
        };
        container.appendChild(div);
    });
}
document.getElementById("tambahMahasiswa").onclick = function() {
    let nama = document.getElementById("namaMahasiswa").value;
    let nim = document.getElementById("nimMahasiswa").value;
    let jurusan = document.getElementById("jurusanMahasiswa").value;
    if (nama && nim && jurusan) {
        tambahMahasiswaStorage(nama, nim, jurusan);
        renderMahasiswa();
    }
};
document.getElementById("cariPost").onclick = function() {
    search = document.getElementById("searchPost").value;
    halaman = 1;
    renderPost();
};
document.getElementById("sebelumnya").onclick = function() {
    if (halaman > 1) {
        halaman--;
        renderPost();
    }
};
document.getElementById("berikutnya").onclick = function() {
    halaman++;
    renderPost();
};
document.getElementById("tambahTodo").onclick = function() {
    let text = document.getElementById("todoInput").value;
    if (text) {
        tambahTodo(text);
        document.getElementById("todoInput").value = "";
        renderTodo();
    }
};
renderMahasiswa();
renderTodo();
ambilPost().then(function() {
    renderPost();
});