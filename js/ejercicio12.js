document.write(`Crea un programa que genere un número aleatorio entre 1 y 10 (ENTERO OBVIAMENTE). Luego usa un bucle para
permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén
el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.<br><br>`);

const min = 1;
const max = 10;
let intento = 1;

const numeroAzar = Math.round(Math.random() * (max - min) + min); // UVE QUE BUSCAR EN INTERNET EH!!! RARÍSIMO!!!
console.log(numeroAzar);


function mayorOMenor(valor) {
    if (valor < numeroAzar) {
        return 'mayor';
    } else {
        return 'menor';
    }
}

let eleccion = +prompt("Elige un número entre 1 y 10.");
if (eleccion !== numeroAzar) {
    intento += 1;
    alert(`El número ${eleccion} no era correcto. El número es ${mayorOMenor(eleccion)} que ${eleccion}.`);
    while (eleccion !== numeroAzar) {
        eleccion = +prompt("Elige otro número.");
        if (eleccion !== numeroAzar) {
            intento += 1;
            alert(`El número ${eleccion} no era correcto. El número es ${mayorOMenor(eleccion)} que ${eleccion}.`);
        } else {
            alert(`¡Felicidades! Has adivinado el número en el intento ${intento}. Numero: ${eleccion}.`);
        }
    }
} else {
    alert(`¡Felicidades! Has adivinado el número a la primera. Numero: ${eleccion}.`);
}
