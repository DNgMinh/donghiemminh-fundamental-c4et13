n=int(input('Enter a number:'))
for i in range(2,n):
    if i*i==n:
        print(str(n)+' is a square number')
        break
    if i==n-1:
        print(str(n)+" isn't a square number")
for t in range(2,n):
    if n%t==0:
        print(str(n)+" isn't a prime number")
        break
    if t==n-1:
        print(str(n)+' is a prime number')  



        