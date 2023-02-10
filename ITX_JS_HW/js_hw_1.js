let item_1 = 5;                     //Cоздать переменную “item_1” и присвоить переменной item_1 цифру 5.
console.log(item_1)                 //Вывести в консоль item_1.
let item_2 = 3;                     //Создать переменную “item_2” и присвоить переменной item_2 цифру 3.
console.log(item_2)                 //Вывести в консоль item_2.
let item_3 = item_1 + item_2;       //Создать переменную “item_3” и присвоить переменной item_3 сложение item_1 и item_2.
console.log("Результат =", item_3)  //Вывести в консоль item_3.
let item_4 = "Yolochka";            //Создать переменную “item_4” и присвоить переменной item_4 строку “Yolochka”
console.log(item_4)                 //Вывести в консоль item_4.
console.log(item_3 + item_4)        //Вывести в консоль сложение item_3 и item_4.
console.log(item_3 * item_4)        //Вывести в консоль умножение item_3 и item_4
let item_5 = item_3;                //Создать переменную “item_5” и присвоить переменной item_5 переменную item_3
let item_6 = 15;                    //Создать переменную item_6 и присвоить переменной item_6 значение 15
let item_6_type = item_6;           //Создать переменную item_6_type и присвоить переменной item_6_type тип переменной item_6
console.log("item_6 ==",typeof item_6 )             // (Вывести в консоль тип данных item_6 в виде ——  “item_6 ==
console.log("item_6_type ==",typeof item_6_type)    //”  item_6,  “item_6_type == ”  item_6_type ——)
let item_7 = item_6 + ""                            //Создать переменную item_7 и в ней преобразовать item_6 в String.
console.log("item_7 ==",typeof item_7)
let item_7_type = item_7;                           //Присвоить переменной item_7_type тип переменной item_7
console.log("item_7_type ==",typeof item_7_type)
let age_1 = 0
let age_2 = 0
let age_3 = 0
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