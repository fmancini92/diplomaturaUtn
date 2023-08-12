
function calc(){

    var distancia = prompt('Ingrese una distancia');
    
    
    if (distancia <= 1000) {
        document.write('Debe ir a pie');
    } else if (distancia >= 1001 && distancia <= 10000) {
        document.write('Debe ir en bicicleta');
    } else if (distancia >= 10001 && distancia <= 30000) {
        document.write('Debe ir en colectivo');
    } else if (distancia >= 30001 && distancia <= 100000) {
        document.write('Debe ir en auto');
    } else if (distancia >= 100001) {
        document.write('Debe ir en avion');
    }

    console.log(distancia);
    
}

calc();
