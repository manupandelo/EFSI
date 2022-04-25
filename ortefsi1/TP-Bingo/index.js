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
const carton=[];

const process_data = () => {

    let x = 100;

    return {
        resultado: x
    };
};

app.use(express.json());
 
function NumRandom(max){
    return Math.floor(Math.random() * max-1) + 1;
}

function NumsCarton(){
    const nums=[];
    for(let i=0;i<10;i++){
       let num=NumRandom(50);
       for(let n=0;n<nums.length;n++){
           if(num==nums[n]);
           num=NumRandom(50);
       }
       nums.push(num);
    }
    return nums;
}
	
app.post("/numero_aleatorio", function (req, res) {
	
    console.log(res);
    res.send(NumRandom(req.body.numero));
	// res.end();
});

app.post("/iniciar_juego", function (req, res) {
	
    for(let i=0;i<req.body.cartones;i++){
        
        carton.push({
            numeros: NumsCarton(),
            nombre: i
        });
    }
	// res.end();
});

app.get("/cartones/:nombre?", function (req, res) {
    var nombre=req.params.nombre;
    
    res.send("respuesta");
});

app.get("/cartones", function (req, res) {
    res.send(carton);
});

app.get("/sacar_numero", function (req, res) {
    res.send("respuesta");
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});