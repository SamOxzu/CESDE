def funcion5(valor,descuento):
    valornuevo = (100-descuento) * valor / 100
    return "El valor del producto es ",valor," el descuento es ",descuento,"% y el valor total con el descuento es ",valornuevo

print(funcion5(1000,60))