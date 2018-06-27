w=int(input('Weight(kg): '))
h=int(input('Height(cm): '))
BMI=w/((h/100)*(h/100))
print('BMI=',BMI)
if BMI<16:
    print('Severely underweight')
elif BMI<18.5:
    print('Underweight') 
elif BMI<25:
    print('Normal')
elif BMI<30:
    print('Overweight')
else:
    print('Obese')               
