def minimum(a,b,c,d):
    if a <= b and a <= c and a <= d:
        print(a)
    elif b <= a and b <= c and b <= d:
        print(b)
    elif c <= a and c <= b and c <= d:
        print(c)
    elif d <= a and d <= b and d <= c:
        print(d)
a1,b1,c1,d1=map(int,input().split())
minimum(a1,b1,c1,d1)