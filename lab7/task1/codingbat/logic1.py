#A  
def cigar_party(cigars, is_weekend):
    return cigars >= 40 if is_weekend else 40 <= cigars <= 60

#B  
def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    return 1

#C 
def squirrel_play(temp, is_summer):
    return 60 <= temp <= (100 if is_summer else 90)

#D  
def caught_speeding(speed, is_birthday):
    speed_limit = (60, 80) if not is_birthday else (65, 85)
    if speed <= speed_limit[0]:
        return 0
    elif speed <= speed_limit[1]:
        return 1
    return 2

#E 
def sorta_sum(a, b):
    return 20 if 10 <= a + b <= 19 else a + b

#F  
def alarm_clock(day, vacation):
    if vacation:
        return "off" if day in [0, 6] else "10:00"
    return "7:00" if day not in [0, 6] else "10:00"

#G 
def love6(a, b):
    return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

#H  
def in1to10(n, outside_mode):
    return (1 <= n <= 10) if not outside_mode else (n <= 1 or n >= 10)

#I  
def near_ten(num):
    return num % 10 <= 2 or num % 10 >= 8
