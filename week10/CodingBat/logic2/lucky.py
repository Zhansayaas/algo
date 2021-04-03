def lucky_sum(a, b, c):
    ans = 0
    l = [a, b, c, 13]
    for n in l[:l.index(13)]:
        ans += n
    return ans