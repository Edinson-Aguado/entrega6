document.write(`Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir
la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número
mayor a 1000, detén el bucle.<br><br>`);

function valido(valor) {
    if (valor >= 1 && valor <= 100) {
        return true;
    } else {
        return false;
    }
}

function obtenerNumero() {
    const numero = +prompt("Ingrese un número entre 1 y 100.");

    if (valido(numero)) {
        return numero;
    } else {
        // obtenerNumero(); // Puedo volver a invocar la función y hacer recursividad.
        console.log("Valor ingresado incorrecto.");
    }
}

function mostrarTablaDeMultiplicacion(valor) {
    document.write(`<h2>Tabla de multiplicación de ${valor}.</h2>`);
    for (let i = 0; i <= 10; i++) {
        document.write(`${valor} x ${i} = ${valor*i}.<br>`);
        if (valor*i > 1000) { // OJO! AL PARECER NUNCA A A TENER QUE USAR ESTE BLOQUE DE CÓDIGO, PORQUE EL NÚMERO MÁXIMO JUSTAMENTE ES 1000.
            document.write(`El resultado de ${valor} x ${i} > 1000. Por lo que se detendrá el proceso.`)
            break;
        }
    }
}

const valor = obtenerNumero();
mostrarTablaDeMultiplicacion(valor);