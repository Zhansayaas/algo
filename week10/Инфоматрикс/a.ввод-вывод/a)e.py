n = int(input())
k = int(input())
if(n*k>0):
    print(n*k%109)
else:
    print((109+ (n*k)%109)%109)