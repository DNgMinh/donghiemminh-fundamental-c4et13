item=['T-shirt','Sweater']
n='0'
while True:
    print()
    n=input('Welcome to our shop, what do you want (C, R, U, D or exit)?').lower()
    if n=='r':
        print('Our items:',*item,sep=', ')
    elif n=='c':
        c=input('Enter new item:')
        item.append(c)
        print('Our items:',*item,sep=', ')
    elif n=='u':
        while True:
            p=int(input('Update position?'))
            if 0<p<=len(item):
                break
        u=input('New item?')
        item[p-1]=u
        print('Our items:',*item,sep=', ')
    elif n=='d':
        while True:
            d=int(input('Delete position?'))
            if 0<d<=len(item):
                break
        del item[d-1]    
        print('Our items:',*item,sep=', ')
    elif n=='exit':
        break    
    else:
        print('???')

