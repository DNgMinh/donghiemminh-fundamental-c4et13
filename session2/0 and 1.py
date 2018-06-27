n=int(input('Enter a number:')) 
for i in range(int(n/2)):
    print('1 0 ',end="")
if n%2 != 0:
    print('1')    
    