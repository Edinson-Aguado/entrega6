document.write(`Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3,
imprime "Fizz". Si es divisible entre 5, imprime "Buzz". Si es divisible entre ambos, imprime
"FizzBuzz".<br><br>`);

const fizz = 'Fizz';
const buzz = 'Buzz';

for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(`El número ${i} es divisible por 3 y 5. Entonces... ${fizz+buzz}.<br>`);
    } else if (i % 3 === 0) {
        document.write(`El número ${i} es divisible por 3. Entonces... ${fizz}.<br>`);
    } else if (i % 5 === 0) {
        document.write(`El número ${i} es divisible por 5. Entonces... ${buzz}.<br>`);
    }
}