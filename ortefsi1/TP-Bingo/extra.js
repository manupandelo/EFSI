const CrearCarton=(numscarton)=>{
    const carton = [];

    let i = 0;

    while (i < numscarton) {
        const random = rnd();
        console.log(random, en_decena(random));

        if(!decena_completa(random)) {
            carton.push(random);
            i++;

        } else {
            console.log(`Decena completa`);
        }
    }

    console.log(carton);
    console.log(decenas);
}

const en_decena = (num) => num === 100 ? 10 : Math.floor(num/10) + 1;
 
const decena_completa = (num) => {
    const decena = en_decena(num);

    if (decenas[decena-1] >= 2) {
        return true;
    } else {
        decenas[decena-1] = decenas[decena-1] + 1;
        return false;
    }

}
