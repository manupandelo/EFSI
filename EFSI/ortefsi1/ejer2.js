//Dado un array, multiplicar todos sus valores por el anterior menos el siguiente sin modificar el array original

const data=[2,3,5,12,54,5,-1,0,4,23,66,7];
const results=[];
for(let i=0;i<data.length; i++){
    let anterior;
    if(data[i-1]){
        anterior=data[i-1];
    }
    else{
        anterior=0;
    }
    let siguiente;
    if(data[i+1]){
        siguiente=data[i+1];
    }
    else{
        siguiente=0;
    }
    results==data[i]*(anterior - siguiente);
}

console.log(results);

/*
const anterior=data[i-1];
const siguiente=data[i+1];
results=data[i]*anterior - siguiente;
*/