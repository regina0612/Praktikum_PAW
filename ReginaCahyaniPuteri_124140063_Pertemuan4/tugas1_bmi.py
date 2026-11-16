# Program Penghitung BMI (Body Mass Index)

berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (m): "))

if tinggi <= 0 or berat <= 0:
    print("Berat dan tinggi badan harus lebih dari 0.")
else:
    bmi = berat / (tinggi * tinggi)

    if bmi < 18.5:
        kategori = "Berat badan kurang"
    elif bmi < 25:
        kategori = "Berat badan normal"
    elif bmi < 30:
        kategori = "Berat badan berlebih"
    else:
        kategori = "Obesitas"

    print("\nHASIL PERHITUNGAN BMI")
    print(f"Berat badan : {berat} kg")
    print(f"Tinggi badan: {tinggi} m")
    print(f"Nilai BMI   : {bmi}")
    print(f"Kategori    : {kategori}")
