# Código que imprime los números del 1 al 10 saltándose el 7 con el comando continue

w = 0

while w < 10:
    w = w+1
    if(w == 7):
        continue
    print(w)