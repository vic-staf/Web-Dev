# A
def string_times(str, n):
    return str * n

# B
def front_times(str, n):
    return str[:3] * n

# C
def string_bits(str):
    return str[::2]

# D
def string_splosion(str):
    return ''.join(str[:i+1] for i in range(len(str)))

# E
def last2(str):
    if len(str) < 2:
        return 0
    last_two = str[-2:]
    return sum(1 for i in range(len(str) - 2) if str[i:i+2] == last_two)

# F
def array_count9(nums):
    return nums.count(9)

# G
def array_front9(nums):
    return 9 in nums[:4]

# H
def array123(nums):
    return any(nums[i:i+3] == [1, 2, 3] for i in range(len(nums) - 2))

# I
def string_match(a, b):
    return sum(1 for i in range(min(len(a), len(b)) - 1) if a[i:i+2] == b[i:i+2])
