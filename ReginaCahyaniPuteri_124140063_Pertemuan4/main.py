import math_operations

sisi = 5
panjang = 8
lebar = 4
jari_jari = 7

print("\n1.PERSEGI")
print(f"Sisi: {sisi}")
print(f"Luas: {luas_persegi(sisi)}")
print(f"Keliling: {keliling_persegi(sisi)}")

print("\n2.PERSEGI PANJANG")
print(f"Panjang: {panjang}")
print(f"Lebar: {lebar}")
print(f"Luas: {luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling: {keliling_persegi_panjang(panjang, lebar)}")

print("\n3.LINGKARAN")
print(f"Jari-jari: {jari_jari}")
print(f"Konstanta PI: {math_operations.PI}")
print(f"Luas: {luas_lingkaran(jari_jari)}")
print(f"Keliling: {keliling_lingkaran(jari_jari)}")

suhu_celsius = 25
print("\n4.KONVERSI TEMPERATUR")
print(f"Suhu Celsius: {suhu_celsius} C")
print(f"Fahrenheit : {celsius_ke_fahrenheit(suhu_celsius)} F")
print(f"Kelvin : {celsius_ke_kelvin(suhu_celsius)} K")

suhu_lain = 0
print("\nContoh tambahan menggunakan import math_operations:")
print(
    f"{suhu_lain} C = "
    f"{math_operations.celsius_ke_fahrenheit(suhu_lain)} F"
)

