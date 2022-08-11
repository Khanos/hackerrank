#!/usr/bin/env python3
def insertion_sort(l):
    for i in range(1, len(l)):
        j = i-1
        key = l[i]
        while (j > 0) and (l[j] > key):
           l[j+1] = l[j]
           j -= 1
        l[j+1] = key
    return l

m = 6
ar = [4, 1, 3, 5, 6, 2]
print(ar)
test = insertion_sort(ar)
print(test)
print('\n')
for i in range(m):
    if i > 0:
        left = ar[:i]
        right = ar[i:]
        sorted_left = insertion_sort(left)
        ar = sorted_left + right
        print(left)
        print(sorted_left)
        print(right)
        print(ar)
        print('___________________')
print(ar)
#print(" ".join(map(str,leftAndRight)))

