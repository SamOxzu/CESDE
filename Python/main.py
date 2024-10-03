# Comentario de una línea

"""
Comentario de
varias lineas
"""

dato1 = 80 # Int
dato2 = "10" # String
dato3 = 2.5 # Float

print(type(dato1)) # Tipo de variable
print(type(dato2))
print(type(dato3))

print(dato1+int(dato2)) # Convierte el String "dato2" en un Int, imprime 90
print(str(dato1)+dato2) # Convierte el Int "dato1" en un String, imprime 8010

"""
    Para el if no se usan parentesis ni llaves,
    pero lo que ejecuta la condición debe estar
    indexado dentro del if.
"""
if dato1>50:
    print("dato1 es mayor a 50")
elif dato1==50:
    print("dato1 es 50")
else:
    print("dato1 es menor a 50")

# LISTAS
lista1 = ["uno","dos","tres"] # Cómo crear una lista
print(type(lista1)) # Imprime tipo list (porque es el tipo de lista1)
print(lista1[0]) # Imprime el contenido del índice 0 de la lista lista1

for dato in lista1:
    print(dato) # Ciclo for que recorre el list lista1

lista1[2] = "Cambiao" # Produce un cambio en la posición 2 de lista1

lista1.append("cuatro") # Ejecuta el método append en lista1, que inserta un dato al final de la lista