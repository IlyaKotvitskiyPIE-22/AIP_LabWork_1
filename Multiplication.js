function Multiplication(){
    var firstNumber = document.getElementById("multiplicationInput1"); /* Первое число */
    var secondNumber = document.getElementById("multiplicationInput2"); /* Второе число */
    var result = Number(firstNumber.value) * Number(secondNumber.value); /* Умножаем первое число на второе */
    alert("Ответ: " + result) /* Выводим ответ */
}
