var validado=false;


function validar(nota,materia){
    if((nota<0) || (nota>10)){
        document.getElementById(materia).style.color="red"
        validado= false;
    }
    else{
        document.getElementById(materia).style.color="green"
        validado= true;
    }

}
function calcularPromedio(){
    var mate=document.getElementById('nota-matematica').value;
    var lengua=document.getElementById('nota-lengua').value;
    var efsi=document.getElementById('nota-efsi').value;
    if(verificarNull(mate,lengua,efsi)){
        alert("Error. Llenar con numeros del 1 al 10");
    }
    else{   
        var promedio=((parseFloat(mate) + parseFloat(lengua) + parseFloat(efsi))/3).toFixed(2);
        document.getElementById('resultado').innerHTML="El promedio es " + promedio;
        console.log(promedio);
        if(promedio>=6){
            document.getElementById('resultado').style.color="green";
        }
        else{
            document.getElementById('resultado').style.color="red";
        }
    }
}
function notaMasAlta(){
    var mate=document.getElementById('nota-matematica').value;
    var lengua=document.getElementById('nota-lengua').value;
    var efsi=document.getElementById('nota-efsi').value;
    if(verificarNull(mate,lengua,efsi)){
        alert("Error. Llenar con numeros del 1 al 10");
    }
    else{
        if(parseInt(mate) > parseInt(lengua) && parseInt(mate) > parseInt(efsi)){

            //nota = "La mayor nota es: Matematica "+ parseInt(mate);
            document.getElementById("notaAlta").innerHTML = "La mayor nota es: Matematica con nota de:"+ parseInt(mate);
            document.getElementById("notaAlta").style.color = "blue";
        }
        else if(parseInt(lengua) > parseInt(efsi) && parseInt(lengua) > parseInt(mate)){
       
            
            document.getElementById('resultado').innerHTML = "La mayor nota es: Lengua con nota de:"+ parseInt(lengua);
        }
        else if(parseInt(lengua) == parseInt(mate) && parseInt(lengua) == parseInt(efsi)){
            document.getElementById('resultado').innerHTML = "Las mayores notas son: Lengua, Matematica y EFSI con nota de:" + parseInt(mate);
        }
        else if(parseInt(lengua) == parseInt(mate) && parseInt(lengua) > parseInt(efsi)){
            document.getElementById('resultado').innerHTML = "Las mayores notas son: Lengua y Matematica con nota de:" + parseInt(mate);
        }
        else if(parseInt(mate) == parseInt(efsi)){
            document.getElementById('resultado').innerHTML = "Las mayores notas son: Matematica y EFSI" + parseInt(mate);
        }
        else if(parseInt(lengua) == parseInt(efsi)){
            document.getElementById('resultado').innerHTML = "Las mayores notas son: Lengua y EFSI" + parseInt(efsi);
        }
        else {
            document.getElementById('resultado').innerHTML = "La mayor nota es: EFSI con nota de:"+ parseInt(efsi);
        }
    }
    document.getElementById('resultado').style.color="blue";
}

let verificarNull = (nota1,nota2,nota3) => {
    let notas=[nota1,nota2,nota3]
    let vacio=false;
    notas.forEach(nota => {
        if(nota==null || nota=='' || isNaN(nota)){
            vacio=true
        }
    });
    return vacio;
}