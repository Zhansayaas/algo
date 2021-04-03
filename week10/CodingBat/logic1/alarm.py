def alarm_clock(day, vacation):
  should = "7:00" if not vacation else "10:00"
  shouldnt = "10:00" if not vacation else "off"
  return should if day not in [6,0] else shouldnt
