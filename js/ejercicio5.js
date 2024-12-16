document.write(`Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un
bucle para encontrar el número más grande. Usa condicionales para comparar los valores.<br><br>`);

const cajitaNumeros = [23, 45, 12, 67, 34, 89, 21];
let maxNum = cajitaNumeros[0];

for (let num of cajitaNumeros) {
    if (num > maxNum) {
        maxNum = num;
    }
}
document.write(`El número máximo del array es: ${maxNum}.`);