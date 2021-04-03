def near_ten(num):
    near = num % ((num / 10) * 10) if num >= 10 else num
    return near in [8, 9, 0, 1, 2]