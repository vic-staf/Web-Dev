#A
N = int(input())

i = 1
while i * i <= N:
    print(i * i)
    i += 1

#B
N = int(input())

for i in range(2, N + 1):
    if N % i == 0:
        print(i)
        break

#C
N = int(input())

power = 1
while power <= N:
    print(power, end=" ")
    power *= 2

#D
N = int(input())

power = 1
while power < N:
    power *= 2

print("YES" if power == N else "NO")

#E
N = int(input())

power = 1
k = 0
while power < N:
    power *= 2
    k += 1

print(k)
