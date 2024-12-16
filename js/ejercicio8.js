document.write(`Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos
números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total
acumulado.<br><br>`);

let total = 0;
let num = +prompt("Ingrese un número.");
if (num !== '' || num !== null) {
    total = total + num;
    while (total < 100) {
        let num = +prompt("Ingrese un número.");
        if (num !== '' || num !== null) {
            total = total + num;
        }
    }
}

document.write(`Total acumulado: ${total}.`);