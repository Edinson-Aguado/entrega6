document.write(`Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa
que recorra el array con un bucle e imprima únicamente los números positivos.<br><br>`);

const listaNumero = [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9];

for (let numero of listaNumero) {
    if (numero >= 0) {
        document.write(`Número ${numero}.<br>`);
    }
}