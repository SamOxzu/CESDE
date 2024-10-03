# Ciclo While que simula 3 tiradas de dado pero si sale un 6 no tira más
import random

w = 1
while w <= 3:
    num = random.randrange(1,7)
    print("la tirada número ",w," fue un ",num)
    w = w+1
    if(num==6):
        print("por lo tanto se aplica el comando break")
        break
