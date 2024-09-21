let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
    alert("El primer número (" + num1 + ") es mayor que el segundo número (" + num2 + ").");
} else if (num2 > num1) {
    alert("El segundo número (" + num2 + ") es mayor que el primer número (" + num1 + ").");
} else {
    alert("Ambos números son iguales.");
}