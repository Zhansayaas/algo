d=int(input())
x=int(input())
c=0
while(d>0):
    if(d%10==x):c=c+1
    d=d//10
    
print(c)