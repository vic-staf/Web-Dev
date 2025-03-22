#A
a = int(input())
b = int(input())

print(max(a,b))

#B
year = int(input())

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

#C
correct_answer = int(input())
student_answer = int(input())

if correct_answer == 1:
    print("YES" if student_answer == 1 else "NO")
else:
    print("YES" if student_answer != 1 else "NO")


#D
x = int(input())

if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

#E
a = int(input())
b = int(input())

if a > b:
    print(1)
elif a < b:
    print(2)
else:
    print(0)
