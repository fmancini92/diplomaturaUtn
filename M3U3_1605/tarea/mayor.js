
var numeros = [];

function agregar() {

    var cantNum = 3;

    console.log(cantNum);

    for (var i = 0; cantNum > i; i++) {
        var numero = prompt('Ingrese numero a comparar')
        numeros.push(numero);
        /* console.log(i); */
    }

    console.log(numeros);
    
}

agregar();

function comprobar() {

    var [num1, num2, num3] = numeros;


    if (num1 > num2 && num1 > num3) {
        document.write('el mayor es el ' + num1);
    } else if (num2 > num3) {
        document.write('el mayor es el ' + num2);
    } else {
        document.write('el mayor es el ' + num3);
    }

}

comprobar();