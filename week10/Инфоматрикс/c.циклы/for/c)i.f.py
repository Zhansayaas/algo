x=int(input())
x2=0
while(x>0):
    d=x%10
    x=x//10
    x2=x2*10
    x2=x2+d
print(x2)
