document.write(`Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa
un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra
es palíndroma si se lee igual al derecho y al revés.<br><br>`);

let palabras = [];

function solicitarYProcesarPalabras() {
    let concat = '';
    const palabra = prompt("Ingrese una lista de palabras separadas por coma. (hola, bebe, biyuyo, guita, plata, money, etc).");
    if (palabra !== '' && palabra !== null) {
        for (let simb of palabra) {
            if (simb !== ' '){
                if (simb !== ','){
                    concat = concat + simb;
                } else {
                    palabras.push(concat);
                    concat = '';
                }
            }
            
        }
    }
}

function palindromas() {
    
    for (let palabra of palabras) {
        esPalindroma = true;
        palabra = palabra.toLowerCase(); // Para que trabajemos en una sola expresión.
        const aux = palabra.split("");
        const long = palabra.length; 
        for (let i = 0; i < long / 2; i++) {

            if (aux[i] !== aux[(long - 1) - i]) { // (long - 1) sería el final del array. Y luego se resta i para que vaya disminuyendo el indice.
                
                document.write(`La palabra '${palabra}' no es palíndroma.<br>`);
                esPalindroma = false;
                break;

            }
        }

        if (esPalindroma === true) {
            document.write(`La palabra <b>'${palabra}'</b> es palíndroma.<br>`);
        }
    }
}

document.write(`<h2>RESOLUCIÓN:</h2>`);

let esPalindroma = true;
solicitarYProcesarPalabras();
palindromas();