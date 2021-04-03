n = int(input())
a = input().split()
count = 0
for i in range(0, n):
    if int(a[i]) > int(a[0]):
        a[0] = a[i]
        count += 1
    else:
        a[0] = a[i]
print(count)  