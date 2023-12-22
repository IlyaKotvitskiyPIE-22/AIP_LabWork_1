function Addition(){
var firstNumber = document.getElementById("additionInput1"); /* Первое число */
var secondNumber = document.getElementById("additionInput2"); /* Второе число */
var result = Number(firstNumber.value) + Number(secondNumber.value); /* Складываем первое число со вторым */
alert("Ответ: " + result) /* Выводим ответ */
}

