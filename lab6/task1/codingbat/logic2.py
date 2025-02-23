#A  
def make_bricks(small, big, goal):
    return goal % 5 <= small and goal - big * 5 <= small

#B  
def lone_sum(a, b, c):
    return sum(x for x in (a, b, c) if (a, b, c).count(x) == 1)

#C  
def lucky_sum(a, b, c):
    for x in (a, b, c):
        if x == 13:
            return sum([a, b, c][: (a, b, c).index(x)])
    return a + b + c

#D  
def no_teen_sum(a, b, c):
    def fix_teen(n):
        return n if n not in [13, 14, 17, 18, 19] else 0
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

#E  
def round_sum(a, b, c):
    def round10(n):
        return (n + 5) // 10 * 10
    return round10(a) + round10(b) + round10(c)

#F  
def close_far(a, b, c):
    def close(x, y): return abs(x - y) <= 1
    def far(x, y): return abs(x - y) >= 2
    return (close(a, b) and far(b, c) and far(a, c)) or (close(a, c) and far(c, b) and far(a, b))

#G  
def make_chocolate(small, big, goal):
    max_big = min(goal // 5, big)
    remainder = goal - max_big * 5
    return remainder if remainder <= small else -1
