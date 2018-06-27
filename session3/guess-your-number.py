print('Guess your number game')
print('Now think of a number from 1 to 100, then press enter')
input()
print('All you have to do is answer to my guess')
print("'c' if my guess is correct")
print("'s' if my guess is smaller than your number")
print("'l' if my guess is larger than your number")
input()
n='0'
s=0
l=100
while n!='c' :
    from random import randint
    m=int(randint(s+1,l-1))
    n=str(input('Is '+str(m)+' your number? '))
    if n=='s':
        s=m
    elif n=='l':
        l=m
    else:
        print('I knew it!')
        break    



    
