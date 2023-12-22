function Subtraction(){
    var firstNumber = document.getElementById("subtractionInput1"); /* Первое число */
    var secondNumber = document.getElementById("subtractionInput2"); /* Второе число */
    var result = Number(firstNumber.value) - Number(secondNumber.value); /* Вычитаем из первого числа второе */
    alert("Ответ: " + result) /* Выводим ответ */
}


