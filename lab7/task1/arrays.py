#A
N = int(input())
arr = list(map(int, input().split()))
for i in range(0, N, 2):
    print(arr[i], end=' ')

#B
N = int(input())
arr = list(map(int, input().split()))
for num in arr:
    if num % 2 == 0:
        print(num, end=' ')

#C
N = int(input())
arr = list(map(int, input().split()))
count = 0
for num in arr:
    if num > 0:
        count += 1
print(count)

#D
N = int(input())
arr = list(map(int, input().split()))
count = 0
for i in range(1, N):
    if arr[i] > arr[i - 1]:
        count += 1
print(count)

#E
N = int(input())
arr = list(map(int, input().split()))
found = False
for i in range(1, N):
    if arr[i] * arr[i - 1] > 0:
        found = True
        break
print("YES" if found else "NO")

#F
N = int(input())
arr = list(map(int, input().split()))
count = 0
for i in range(1, N - 1):
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        count += 1
print(count)

#G
N = int(input())
arr = list(map(int, input().split()))
for i in range(N // 2):
    arr[i], arr[N - 1 - i] = arr[N - 1 - i], arr[i]
for num in arr:
    print(num, end=' ')
