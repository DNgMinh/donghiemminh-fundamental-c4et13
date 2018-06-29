flock=[5,7,300,90,24,120,75,50,201,194]
i=0
while True:    
    i+=1
    if i!=1:
        for t in range(0,len(flock)):
            flock[t]+=50
    print('MONTH ',i,' :')
    print("Here is my flock:")
    print(flock)
    m=max(flock)
    n=input()
    if n=="I'm bored":
        break
    print('Now my biggest sheep has size ',m," let's shear it")
    flock[flock.index(m)]=8
    input()
    print('After shearing, here is my flock:')
    print(flock)
    input()
    print()
print()    
print("Let's travel around the world!")
input()
print('My flock has size in total: ',sum(flock))
print('I would get ',sum(flock),'* 2$= ',sum(flock)*2,'$')
            
    


