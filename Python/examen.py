def suma(*datos):
    result = 0
    for i in datos:
        result+=i
    return result

list = [suma(2,4,8,2,12),suma(5,3,2),suma(20,40,40)]
list.append(20)
list[0]+=2

print(list[0]+list[1]+list[2]+list[3])