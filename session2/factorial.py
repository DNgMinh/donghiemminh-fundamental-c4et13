n=int(input('Enter a number:'))
for i in range(1,n+1):
    if i==1:
        m=1
    m*=i 
print(n,'!=',m)    
