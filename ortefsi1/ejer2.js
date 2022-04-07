//Dado un array, multiplicar todos sus valores por el anterior menos el siguiente sin modificar el array original

const data=[2,3,5,12,54,5,-1,0,4,23,66,7];
const results=[]

function calcular(num, mult, rest){
    return num*mult-rest;
}

for(let i=0;i<data.length; i++){
    if(i==0){
        results[i]=calcular(data[i], 0, data[i+1]);
    }
    else if(i){
        results[i]=calcular(data[i], data[i-1]);
    }
    else{
       results[i]=calcular(data[i], data[i-1], data[i+1]);   
    }
}

console.log(results);

