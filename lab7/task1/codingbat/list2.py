# A
def count_evens(nums):
    return sum(1 for num in nums if num % 2 == 0)

# B
def big_diff(nums):
    return max(nums) - min(nums)

# C
def centered_average(nums):
    nums.sort()
    return sum(nums[1:-1]) // len(nums[1:-1])

# D
def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
        else:
            total += nums[i]
            i += 1
    return total

# E
def sum67(nums):
    total = 0
    in_range = False
    for num in nums:
        if num == 6:
            in_range = True
        elif num == 7 and in_range:
            in_range = False
        elif not in_range:
            total += num
    return total

# F
def has22(nums):
    return any(nums[i] == 2 and nums[i + 1] == 2 for i in range(len(nums) - 1))
