var = 15

print(var > 9 and var == 15) # Usando el operador lógico and, imprime True, porque var es mayor que 9 y es igual a 15
print(var > 70 or var < 20) # Usando el operador lógico or, imprime True, porque var no es mayor a 70 pero sí es menor que 20
print(not(var > 70 or var < 20)) # A pesar de ser la misma condición, imprime False por el operador lógico not