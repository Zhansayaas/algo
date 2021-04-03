n = int(input())
a = input().split()
ch=0
for i in range(0, n - 1):
    if (int(a[i + 1]) >= 0 and int(a[i]) >= 0  ) or (int(a[i]) < 0 and int(a[i + 1]) < 0):
        ch=1
        break
if ch==1:
    print("YES")
else:
    print("NO")