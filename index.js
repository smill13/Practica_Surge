//incializacion de variables
let tarjetasDestapadas= 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado= null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer= 30;
let tiempoRegresivoID= null;
//apuntando a documento html

let mostrarMovimientos = document.getElementById('movimiento');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo')

//generar números aleatorios
let numeros= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random() - 0.5})
console.log(numeros);


//funciones

function contarTiempo(){
    tiempoRegresivoID = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
        clearInterval(tiempoRegresivoID);
        bloquearTarjetas();
        }
    },1000)

    function bloquearTarjetas(){
        for(let i = 0; 1<=15; i++){
            let tarjetabloqueada = document.getElementById(i);
            tarjetabloqueada.innerHTML = numeros[i];
            tarjetabloqueada.disabled = true;
        }
    }


}

//funcion principal

function Destapar(id){

if (temporizador == false){
    contarTiempo();
    temporizador= true;
}


tarjetasDestapadas ++;
console.log(tarjetasDestapadas);

if(tarjetasDestapadas == 1){
    // Mostrar el primer número
tarjeta1 = document.getElementById(id);
primerResultado = numeros[id];
tarjeta1.innerHTML = primerResultado;

//Deshabilitar primer botón

tarjeta1.disabled = true;

}else if(tarjetasDestapadas == 2){
tarjeta2 = document.getElementById(id);
segundoResultado = numeros[id];
tarjeta2.innerHTML = segundoResultado;
tarjeta2.disabled= true;

//movimientos
movimientos++;
mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

if (primerResultado == segundoResultado){
    //encerar contador targetas destapadas

    tarjetasDestapadas= 0;

    //aumentar aciertos
    aciertos++;
    mostrarAciertos.innerHTML= `Aciertos: ${aciertos}`;

    if(aciertos == 8){
        mostrarAciertos.innerHTML= `Aciertos: ${aciertos} 😐😐👺👺`;
        mostrarMovimientos.innerHTML= `Movimientos: ${movimientos} 👺👺👺`;
    }


}else{
    //mostrar momentaneamente y tapar

    setTimeout(()=>{
        tarjeta1.innerHTML= ' ';
        tarjeta2.innerHTML= ' ';
        tarjeta1.disabled= false;
        tarjeta2.disabled= false;
        tarjetasDestapadas= 0;
    },500);
}
}
}