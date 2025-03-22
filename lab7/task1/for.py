#A
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

#B
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")

#C
import math

a = int(input())
b = int(input())

for i in range(math.isqrt(a), math.isqrt(b) + 1):
    square = i * i
    if a <= square <= b:
        print(square, end=" ")

#D
x = input()
d = input()

print(x.count(d))

#E
x = input()

print(sum(int(digit) for digit in x))

#F
x = input()

print(int(x[::-1]))

#G
x = int(input())

for i in range(2, x):
    if(x % i == 0):
        print(i)
        break

#H
x = int(input())

for i in range(2, x):
    if(x % i == 0):
        print(i, end=" ")
        
#I
x = int(input())
count = 0

for i in range(2, x):
    if(x % i == 0):
        count = count + 1
print(count)       

#J
total = sum(int(input()) for _ in range(100))
print(total)

#K
N = int(input())

total = sum(int(input()) for _ in range(N))

print(total)

#L
binary_number = input()

print(int(binary_number, 2))


#M
N = int(input())

count = 0
for _ in range(N):
    if int(input()) == 0:
        count += 1

print(count)


     
