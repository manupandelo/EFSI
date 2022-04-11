//duplicar el array anterior y aplicarle la funcion RAIZ a todos los elementos obteniendo como resultado : [{Original 9, Modificado 3}]

const data=[2,3,5,12,54,5,-1,0,4,23,66,7];
const duplicado= data.concat(data);
const result=[];
for(let i=0;i<data.length;i++){
    const square_root=Math.sqrt(duplicado[i]);
    if (!isNaN(square_root)){
        result.push({
            original:duplicado[i],
            modificado:square_root
        });
    }
}    
    console.log(result);

/*    const square_root=Math.sqrt(duplicado[i]);
    if (!isNaN(square_root)){
        result.push({
            original:duplicado[i],
            modificado:square_root
        });
    }*/

/*if(duplicado[i]>=0){
        const object={
            original: duplicado[i],
            modificado: Math.sqrt(duplicado[i]).toFixed(2)
        };
    }
 result.push(object);
*/

/* if (!isNaN(square_root)){
     const rounded=+square_root.toFixed(2);
     //const rounded=Number{square_root.toFixed(2)};
     // funcionan todas const rounded=ParseFloat(square_root.toFixed(2));
     //const rounded=square_root.toFixed(2);
     //const rounded=Math.Round((square_root+100)/100);
     result.push({
            original:duplicado[i],
            modificado:square_root
        });
}*/