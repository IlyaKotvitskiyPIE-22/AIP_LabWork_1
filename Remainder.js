function Remainder(){
    var firstNumber = document.getElementById("remainderInput1"); /* Первое число */
    var secondNumber = document.getElementById("remainderInput2"); /* Второе число */
    var result = Number(firstNumber.value) % Number(secondNumber.value); /* Делим первое число на второе */
    alert("Ответ: " + result) /* Выводим ответ */
}


