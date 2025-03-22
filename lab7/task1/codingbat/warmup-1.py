#A
def sleep_in(weekday, vacation):
    return not weekday or vacation


#B
def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

#C
def sum_double(a, b):
    return 2 * (a + b) if a == b else a + b


#D
def diff21(n):
    return abs(n - 21) * 2 if n > 21 else abs(n - 21)


#E
def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)


#F
def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10


#G
def near_hundred(n):
    return abs(100 - n) <= 10 or abs(200 - n) <= 10


#H
def pos_neg(a, b, negative):
    return (a < 0 and b < 0) if negative else (a < 0) != (b < 0)

#I
def not_string(str):
    return str if str.startswith("not") else "not " + str


#J
def missing_char(str, n):
    return str[:n] + str[n+1:]

#K
def front_back(str):
    if len(str) <= 1:
        return str
    return str[-1] + str[1:-1] + str[0]

#L
def front3(str):
    return str[:3] * 3

