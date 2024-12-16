document.write(`Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas
vocales tiene. Usa condicionales para verificar si cada letra es una vocal.`);

function contarEInformarVocales(palabra) {

    const vocalesString = ['a', 'e', 'i', 'o', 'u'];
    const aux = [0, 0, 0, 0, 0];
    
    for (let letra of palabra){
        switch (letra) {
            case 'a':
                aux[0] = aux[0] + 1;
                break;
            case 'e':
                aux[1] = aux[1] + 1;
                break;
            case 'i':
                aux[2] = aux[2] + 1;
                break;
            case 'o':
                aux[3] = aux[3] + 1;
                break;
            case 'u':
                aux[4] = aux[4] + 1;
                break;
            default:
                break;
        }
    }

    document.write(`<br><br>Cantidades de vocales que tenía la palabra '${palabra}' y cuáles:<br><br>`);
    
    for (let i = 0; i < vocalesString.length; i++) {
        document.write(`Vocal ${vocalesString[i]}: ${aux[i]}.<br>`);
    }
}

const palabra = prompt("Ingrese una palabra (no vacía)");
if (palabra !== '' || palabra !== null) {
    contarEInformarVocales(palabra);
}

