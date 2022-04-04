const lista = [11,33,2,-1,110,99,8];
function sortear(a, b){return b-a};
const result=lista.filter(x=>x%2!==0).sort(sortear);
console.log(result);
console.log(result[1]);