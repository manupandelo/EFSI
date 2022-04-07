//duplicar el array anterior y aplicarle la funcion RAIZ a todos los elementos obteniendo como resultado : [{Original 9, Modificado 3}]

let data=[2,3,5,12,54,5,-1,0,4,23,66,7];
let ArrB = [];
ArrB = data.concat(data);
console.log(ArrB);