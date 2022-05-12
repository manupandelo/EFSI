/*Bingo

Crear un servidor API que represente el juego del Bingo.
Debe tener los siguientes endpoints:

1) POST *numero_aleatorio* que recibe un valor como parámetro y devuelve un número aleatorio entre 1 y ese parámetro.
3) POST *iniciar_juego* que crea los cartones, siendo la cantidad de los mismos el número pasado como parámetro.
2) GET *obtener_carton* que devuelve un array con los números del bingo, representando un cartón del mismo. El nombre del jugador se pasa como parámetro.
4) GET *cartones* Si no se le pasan parámetros (en la URL) devuelve todos los cartones del juego, si no devuelve el cartón pasado en la URL que fué creado con el endpoint *obtener_carton*.
5) GET *sacar_numero* que saca un número del bingo y marca los cartones que lo tienen.

Dinámica del juego:

El juego comienza llamando al endpoint *iniciar_juego* que crea los cartones.
Los usuarios piden los cartones con su nombre (con *obtener_carton*).
Se sacan números con *sacar_numero* hasta que el sistema detecta qué cartón obtuvo el bingo mostrando el nombre del jugador que ganó o diciendo que quedó vacante si el cartón ganador no fué reclamado por un jugador.*/

const express = require("express");
const app = express();
const PORT = 3000;
let nombres=[];
let cartones=[];
let cartonessaved=[];
let bolillas=[];

const process_data = () => {

    let x = 100;

    return {
        resultado: x
    };
};

app.use(express.json());
 
function NumRandom(max){
    return Math.round(Math.random() * max-1) + 1;
}

const CrearCarton=(numscarton)=>{
    const nums=[];
    let num;
    for(let i=0;i<numscarton;i++){
        num=NumRandom(99);
        for(let n=0;n<nums.length;n++){
            while(num===nums[n]);
            num=NumRandom(99);
            while(num===nums[n]){
                num=NumRandom(99);
            }
        }
        nums[i]=num;
    }
    return nums;
}

app.post("/numero_aleatorio", function (req, res) {
	
    console.log(res);
    res.send(NumRandom(req.body.numero));
	// res.end();
});

app.post("/iniciarjuego", function (req, res) {
	
    for(let i=0;i<req.body.cartones;i++){
            let carton=CrearCarton(req.body.numeros);
            cartones.push(carton);
            cartonessaved.push(carton);
        }
        res.send(cartones);
	// res.end();
});

app.get("/obtener_carton", function (req, res) {
    if(nombres.length>=cartones.length){
       res.send(`Error, mas jugadores que cartones`);
    }
    else{
    const nombre=req.body.nombre;
    nombres.push(nombre);
    console.log(nombres);
    i = nombres.length;
    
    res.send(`al jugador "${nombre}" se le fue asignado el carton consistente de los numeros: ${cartones[i-1]}`);
    }
});

app.get("/cartones/:nombre?", function (req, res) {
    const nombre=req.params.nombre;
    let cartonBuscado;
    if(nombre===undefined){
        res.send(cartones);
    }
    else{
        for(let i=0;i<nombres.length;i++){
            if(nombres[i]===nombre){
                cartonBuscado=cartones[i];
            }
        }
        res.send(cartonBuscado);
    }

});

const Bingo = (cartones) => {
    for (let i=0; i<cartones.length; i++) {
        let carton = cartones[i]
        let contador=0;
        for (let j = 0; j < carton.length; j++) {
            if(carton[j]==-1){
                contador = contador +1;
            }
            if(contador==CANT_NUMEROS){
                return i;
            }
        }
        
    }
    return -1;
}

const Bingo = (bolilla) => {
    for (let i= 0; i<cartones.length; i++) {
        carton=cartones[i]
        for (let j=0; j < 10; j++) {
            if (carton[j] === Bolilla) {
                console.log(`Carton de ${nombres[i]} tenia el ${Bolilla}`);
                carton[j] = -1;
            }
        }
        console.log(carton);
    }
}

app.get('/sacarnumero', function (req, res) {
    if (Bingo(cartones)==-1) {
        Bolilla = NumRandom(99);
        bolillas.push(Bolilla);
        console.log(`Se saco la bolilla: ${Bolilla}`);
        VerificarCarton(bolilla);
    }
    else{
        if(Bingo(cartones)>nombres.length){
        res.send("El carton ganador quedo vacante y su carton tenia los numeros: ${cartonessaved[i]}. Salieron las bolillas: ${bolillas}");
        }
        else{
            res.send(`El carton ganador es el de ${nombres[i]} y su carton tenia los numeros: ${cartonessaved[i]}. Salieron las bolillas: ${bolillas}`);
        }
    }
});

app.get('/numero_continuo', function (req, res) {
    while (Bingo(cartones)==-1) {
        Bolilla = NumRandom(99);
        bolillas.push(Bolilla);
        console.log(`Se saco la bolilla: ${Bolilla}`);
        VerificarCarton(Bolilla);
    }
    if(Bingo(cartones)>nombres.length){
        res.send("El carton ganador quedo vacante y su carton tenia los numeros: ${cartonessaved[i]}. Salieron las bolillas: ${bolillas}");
    }
    else{
        res.send(`El carton ganador es el de ${nombres[i]} y su carton tenia los numeros: ${cartonessaved[i]}. Salieron las bolillas: ${bolillas}`);
    }
    
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});