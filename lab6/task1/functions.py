# A
def min_four(a, b, c, d):
    return min(a, b, c, d)

# B
def power(a, n):
    return a ** n

# C
def xor(x, y):
    return int((x or y) and not (x and y))

if __name__ == "__main__":
    a, b, c, d = map(int, input().split())
    print(min_four(a, b, c, d))

    a, n = map(float, input().split())
    n = int(n)
    print(power(a, n))

    x, y = map(int, input().split())
    print(xor(x, y))
