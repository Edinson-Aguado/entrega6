document.write(`Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un
bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad
con su clasificación.<br><br>`);

const edades = [18, 25, 14, 32, 16, 40];

// ----------------------------------------------- //
// function menorOMayorBinario(edad) {
//     if (edad < 18) {
//         return 1
//     } else {
//         return 2
//     }
// }

// for (let edad of edades) {
//     switch (menorOMayorBinario(edad)) {
//         case 1:
//             document.write(`El valor <b>${edad}</b> indica que es <b>menor</b> de edad.<br>`);
//             break;
//         case 2:
//             document.write(`El valor <b>${edad}</b> indica que es <b>mayor</b> de edad.<br>`);
//             break;
//         default:
//             break;
//     }
// }
// ----------------- OTRA FORMA ------------------ //

for (let edad of edades) {
    if (edad < 18) {
        document.write(`El valor <b>${edad}</b> indica que es <b>menor</b> de edad.<br>`);
    } else {
        document.write(`El valor <b>${edad}</b> indica que es <b>mayor</b> de edad.<br>`);
    }
}