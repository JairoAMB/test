function checkNumber(){
    const num1 = parseInt( document.getElementById('number1').value);
    if(num1 >=10 && num1<100);
        const units = num1 %10;
        const tens = num1 /10;
        const sum = units + tens;
        alert(Math.floor(sum));
}