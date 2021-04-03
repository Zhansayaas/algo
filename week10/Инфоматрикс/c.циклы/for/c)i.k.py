k = int(input())
decimal = 0
i=0 
n = 0
while(k != 0):
    dec = k % 10
    decimal += dec * pow(2, i)
    k //= 10
    i += 1
print(decimal)