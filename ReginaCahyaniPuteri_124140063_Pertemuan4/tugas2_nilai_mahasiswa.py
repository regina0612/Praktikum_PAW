# Program Pengelolaan Data Nilai Mahasiswa

mahasiswa = [
    {"nama": "Andi", "nim": "2311001", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
    {"nama": "Budi", "nim": "2311002", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 80},
    {"nama": "Citra", "nim": "2311003", "nilai_uts": 92, "nilai_uas": 95, "nilai_tugas": 90},
    {"nama": "Dina", "nim": "2311004", "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 70},
    {"nama": "Eko", "nim": "2311005", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 55},
]

for mhs in mahasiswa:
    nilai_akhir = (
        0.30 * mhs["nilai_uts"]+ 0.40 * mhs["nilai_uas"]+ 0.30 * mhs["nilai_tugas"])

    if nilai_akhir >= 80:
        grade = "A"
    elif nilai_akhir >= 70:
        grade = "B"
    elif nilai_akhir >= 60:
        grade = "C"
    elif nilai_akhir >= 50:
        grade = "D"
    else:
        grade = "E"

    mhs["nilai_akhir"] = nilai_akhir
    mhs["grade"] = grade

print("DAFTAR NILAI MAHASISWA")

print(f"{'Nama':<12} {'NIM':<12} {'UTS':>7} {'UAS':>7} {'Tugas':>7} {'Nilai Akhir':>13} {'Grade':>7}")

for mhs in mahasiswa:
    print(
        f"{mhs['nama']:<12} {mhs['nim']:<12} "
        f"{mhs['nilai_uts']:>7.2f} {mhs['nilai_uas']:>7.2f} "
        f"{mhs['nilai_tugas']:>7.2f} {mhs['nilai_akhir']:>13.2f} "
        f"{mhs['grade']:>7}"
    )

tertinggi = max(mahasiswa, key=lambda mhs: mhs["nilai_akhir"])
terendah = min(mahasiswa, key=lambda mhs: mhs["nilai_akhir"])

print("\nNILAI TERTINGGI")
print(f"Nama: {tertinggi['nama']}")
print(f"NIM: {tertinggi['nim']}")
print(f"Nilai Akhir: {tertinggi['nilai_akhir']:.2f}")
print(f"Grade: {tertinggi['grade']}")

print("\nNILAI TERENDAH")
print(f"Nama: {terendah['nama']}")
print(f"NIM: {terendah['nim']}")
print(f"Nilai Akhir: {terendah['nilai_akhir']:.2f}")
print(f"Grade: {terendah['grade']}")
