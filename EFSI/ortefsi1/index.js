/*const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server");
};

//esto inicia el servidor
const server = http.createServer(requestListener);

server.listen(port, host, () =>{
    console.log(`server is running on http://${host}:${port}`);
});*/

//Esto no funciona porque sort() ordena alfabeticamente 
//console.log(odds.sort(compare));

//const proc = odds.sort(compare).reverse();

//console.log(odds.sort(function compare(a,b));

const data = [11,33,2,-1,110,99,8];
let odds = [];

for(let i = 0;i< data.length;i++){
    const element = data[i];
    if(element % 2 !== 0){
        odds.push(element);
    }
    
}

odds.sort(function(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    // a debe ser igual b
    return 0;
  });

  console.log(odds[i]);