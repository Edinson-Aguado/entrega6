document.write(`Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente
forma, donde el número de filas lo elija el usuario:<br><br>

*****<br>
****<br>
***<br>
**<br>
*<br><br>
----------------------------------------------------------------------------------------------<br><br>
`);

let filas = +prompt("Elija la cantidad de filas del triángulo. Mayor a 0.");

if (filas !== '' && filas !== null && filas > 0) {
    document.write(`<h2>Cantidad de Filas: ${filas}.</h2><br><br>`);
    while (filas >= 0) {
        for (let cant = filas; cant >= 0; cant--){
            document.write('*');
        }
        document.write(`<br>`);
        filas = filas - 1;
    }
}