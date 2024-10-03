def funcion4(num1,num2):
    if num1<num2:
        x = num1
        y = num2
    elif num2<num1:
        x = num2
        y = num1
    else:
        return "Ha ingresado dos números iguales"

    numeros_pares = []

    while x <= y:
        if x % 2 == 0:
            numeros_pares.append(x)
        x = x+1
    return numeros_pares

print(funcion4(4,20))
