productos = {
    "Oreo",
    "Ajinomen",
    "Trululú",
    "Chocorramo",
    "Monster",
    "SpeedMax",
    "Brownie",
    "Pepsi",
    "Helado",
    "Manzana"
}

for producto in productos:
    print(producto)

print("---------------")
x = productos.pop()
print(x) # Método pop elimina al azar un valor del Set Productos, y con el print sabemos cuál es
print("---------------")

for producto in productos:
    print(producto)