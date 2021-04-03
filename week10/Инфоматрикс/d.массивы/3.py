n=int(input())
a=input().split()
d=0
for i in range(0,n):
    c=int(a[i])
    if(c>0):d+=1
print(d)