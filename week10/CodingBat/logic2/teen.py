def no_teen_sum(a, b, c):
    def teen(n):
        return n if n not in [13, 14, 17, 18, 19] else 0
    return teen(a) +teen(b) +teen(c)