price={
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

stock={
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}
total=0
for fruit in price:
    print(fruit)
    print("Price : ",price[fruit])
    print("Stock : ",stock[fruit])
    print(price[fruit]*stock[fruit])
    total += price[fruit]*stock[fruit]  
    print()

print("Total : ",total) 