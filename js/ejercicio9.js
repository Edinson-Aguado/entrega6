document.write(`Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el
usuario ingresa 12345, el programa debe devolver 54321.<br><br>`);

function obtenerNumeroPositivo() {
    let numero = +prompt("Ingrese un número entero positivo:");

    while (numero === '' || numero === null || numero <= 0) {
        numero = +prompt("Ingrese un número entero positivo (mayor a 0):");
    }

    return numero;
}

let numero = parseInt(obtenerNumeroPositivo());
document.write(`Numero: ${numero}<br><br>`);
let aux = 0;
let aux2 = numero;
while (numero >= 1) {
    aux = aux * 10 + (numero % 10);
    document.write(`aux: ${aux}.<br>`);
    numero = parseInt(numero/10);
    document.write(`numero: ${numero}.<br><br>`);
}

document.write(`Número: ${aux2}. Número invertido: ${aux}. Estado de numero: ${numero}.`);