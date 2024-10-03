def funcion3(*cadenas):
    concatenada = ""
    for cadena in cadenas:
        concatenada = concatenada+" "+cadena
    return concatenada

print(funcion3("Esta es la cadena 1","Esta es la cadena 2"))