#### Домашнее задание по JavaScript с реализацией в коде:
 1. Создать переменную “item_1” и присвоить переменной item_1 цифру 5
 ```javascript
 let item_1 = 5;
 ```
 2. Вывести в консоль item_1
 ```javascript
 console.log(item_1)
 ```
 3. Создать переменную “item_2” и присвоить переменной item_2 цифру 3
 ```javascript
 let item_2 = 3;
 ```
 4. Вывести в консоль item_2
 ```javascript
 console.log(item_2)
 ```
 5. Создать переменную “item_3” и присвоить переменной item_3 сложение item_1 и item_2
 ```javascript
 let item_3 = item_1 + item_2;
 ```
 6. Вывести в консоль item_3
 ```javascript
 console.log("Результат =", item_3)
 ```
 7. Создать переменную “item_4” и присвоить переменной item_4 строку “Yolochka”
 ```javascript
 let item_4 = "Yolochka";
 ```
 8. Вывести в консоль item_4
 ```javascript
 console.log(item_4)
 ```
 9. Вывести в консоль сложение item_3 и item_4
 ```javascript
 console.log(item_3 + item_4)
 ```
 10. Вывести в консоль умножение item_3 и item_4
 ```javascript
 console.log(item_3 * item_4) 
 ```
 11. Создать переменную “item_5” и присвоить переменной item_5 переменную item_3
 ```javascript 
 let item_5 = item_3
 ```
 12. Создать переменную item_6 и присвоить переменной item_6 значение 15
 ```javascript 
 let item_6 = 15;
 ```
 13. Создать переменную item_6_type и присвоить переменной item_6_type тип переменной item_6
 ```javascript 
 let item_6_type = item_6;
 ```
 14. Вывести в консоль тип данных item_6 в виде: “item_6 == ”  item_6,  “item_6_type == ”  item_6_type 
 ```javascript  
 console.log("item_6 ==",typeof item_6)
 console.log("item_6_type ==",typeof item_6_type)
 ```
 15. Создать переменную item_7 и в ней преобразовать item_6 в String.
 ```javascript  
 let item_7 = item_6 + ""
 ```
 16. Создать переменную item_7_type и присвоить переменной item_7_type тип переменной item_7
 ```javascript  
 let item_7_type = item_7;
 ```
 17. Вывести в консоль тип данных item_7 в виде:  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type
 ```javascript
 console.log("item_7 ==",typeof item_7)
 console.log("item_7_type ==",typeof item_7_type)
 ```
 18. Создать 3 переменных:
 - “age_1” и присвоить ей значение 10
 - “age_2” и присвоить ей значение 18
 - “age_3” и присвоить ей значение 60
 
```javascript
 let age_1 = 10
 let age_2 = 18
 let age_3 = 60
```
 
 19. Создать if в котором будите проверять значение переменной age_1 
- Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
- Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome !”
- Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
- Иначе выводите “Technical work”.

```javascript
if(age_1 < age_2){
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then")
}
if(age_1 >=  age_2 || age_1 <  age_3){
    console.log("Welcome!")
}
if(age_1  > age_3){
    console.log("Keep calm and look Culture channel.")
}else{
    console.log("Technical work")
}
  ```
