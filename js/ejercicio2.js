document.write(`Escribe un programa que use un bucle para imprimir todos los números del 1 al 50. Sin
embargo, solo debe mostrar los números pares.<br><br>`);

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        document.write(`Número: ${i}.<br>`);
    }
}