class helado:
    def __init__(self,precio,sabor,tamaño,salsa):
        self.precio = precio
        self.sabor = sabor
        self.tamaño = tamaño
        self.salsa = salsa

    def descripcion(self):
        print(f"Helado de {self.sabor} con salsa de {self.salsa}, de tamaño {self.tamaño} y un precio de {self.precio}")
    
    def __str__(self):
        return f"{self.precio}, {self.sabor}, {self.tamaño}, {self.salsa}"

opc1 = helado(15000,"Limón","Grande","Chicle")
print("Helado 1")
print(opc1.precio)
print(opc1.sabor)
print(opc1.tamaño)
print(opc1.salsa)
print(opc1)
opc1.descripcion()

print("---------------------------------")

opc2 = helado(12000,"Chocolate","Mediano","Arequipe")
print("Helado 2")
print(opc2.precio)
print(opc2.sabor)
print(opc2.tamaño)
print(opc2.salsa)
print(opc2)
opc2.descripcion()
