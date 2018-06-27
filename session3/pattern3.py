n=int(input('Enter the length of the row: '))
print('* '*n)
for i in range(1,n-1):
    print('  '*int(n-i-1),'*')
print('* '*n)    