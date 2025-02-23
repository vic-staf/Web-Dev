# A
def hello_name(name):
    return "Hello " + name + "!"

# B
def make_abba(a, b):
    return a + b + b + a

# C
def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"

# D
def make_out_word(out, word):
    return out[:2] + word + out[2:]

# E
def extra_end(str):
    return str[-2:] * 3

# F
def first_two(str):
    return str[:2]

# G
def first_half(str):
    return str[:len(str)//2]

# H
def without_end(str):
    return str[1:-1]

# I
def combo_string(a, b):
    return a + b + a if len(a) < len(b) else b + a + b

# J
def non_start(a, b):
    return a[1:] + b[1:]

# K
def left2(str):
    return str[2:] + str[:2]
