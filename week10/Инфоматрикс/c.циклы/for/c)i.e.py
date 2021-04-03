x=int(input())
a=0
while(x!=0):
    a+=x%10
    x=x//10
print(a)