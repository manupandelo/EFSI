const esBisiesto = (year) => {
    return (year % 400 === 0) ? true : 
                (year % 100 === 0) ? false : 
                    year % 4 === 0;
};

for(let i=2022;i<2150;i++){
    if(esBisiesto(i)){
        console.log(i);
    }
}