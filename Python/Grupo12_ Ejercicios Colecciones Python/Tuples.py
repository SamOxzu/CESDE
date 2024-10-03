meses = (
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
)
w = 0
while w < len(meses):
    print(meses[w])
    w = w+1

print(meses.index("Agosto")) # Método index indica que el valor "Agosto" se encontró en la posición 7 del Tuple