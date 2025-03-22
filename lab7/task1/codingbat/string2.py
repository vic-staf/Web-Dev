# A
def double_char(str):
    return ''.join(c * 2 for c in str)

# B
def count_hi(str):
    return str.count("hi")

# C
def cat_dog(str):
    return str.count("cat") == str.count("dog")

# D
def count_code(str):
    return sum(1 for i in range(len(str) - 3) if str[i:i+2] == "co" and str[i+3] == "e")

# E
def end_other(a, b):
    a, b = a.lower(), b.lower()
    return a.endswith(b) or b.endswith(a)

# F
def xyz_there(str):
    for i in range(len(str) - 2):
        if str[i:i+3] == "xyz" and (i == 0 or str[i-1] != "."):
            return True
    return False
