function Division(){
    var firstNumber = document.getElementById("divisionInput1"); /* Первое число */
    var secondNumber = document.getElementById("divisionInput2"); /* Второе число */
    var result = Number(firstNumber.value) / Number(secondNumber.value); /* Делим первое число на второе */
    alert("Ответ: " + result) /* Выводим ответ */
}


