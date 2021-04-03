def caught_speeding(speed, is_birthday):
    sp = speed - (65 if is_birthday else 60)
    if sp > 20:
      return 2
    elif sp > 0:
      return 1
    else:
      return 0