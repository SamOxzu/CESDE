def funcion1(lista,word):
    x = 0
    while x < len(lista):
        if word == lista[x]:
            print("La palabra ",word," existe en la lista")
            break
        x = x+1
        if x == len(lista):
            print("La palabra ",word," no existe en la lista")

saboresHelado = ["Limón","Chocolate","Brownie","Fresa","Caramelo"]
funcion1(saboresHelado,"Aguacate")
funcion1(saboresHelado,"Chocolate")