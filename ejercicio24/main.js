var intentosRestantes=0;
function puntaje(){
    var button = document.getElementById("button");
    var acumulador=0;
    var opcion = document.getElementById('f1')['opcionPregunta1'].value;
    console.log(opcion)

    if(opcion==="si"){
      acumulador=acumulador+1;
    }
    var opcion = document.getElementById('f1')['opcionPregunta2'].value;
    console.log(opcion)
    if(opcion==="si"){
        acumulador=acumulador+1
    }
    var opcion = document.getElementById('f1')['opcionPregunta3'].value;
    console.log(opcion)
    if(opcion==="si"){
        acumulador=acumulador+1
    }
    var opcion = document.getElementById('f1')['opcionPregunta4'].value;
    console.log(opcion)
    if(opcion==="si"){
        acumulador=acumulador+1
    }
    var opcion = document.getElementById('f1')['opcionPregunta5'].value;
    console.log(opcion)
    if(opcion==="si"){
        acumulador=acumulador+1
    } 

    if(acumulador===5){
        alert("Felicidades acertastes a todas las preguntas")
        button.setAttribute("disabled", true);
    }else{
         intentosRestantes=intentosRestantes+1;    
       }
       if(intentosRestantes>=3){
        alert("Intentos terminados : Game Over")
        button.setAttribute("disabled", true);   
    }else if (acumulador!==5){
        alert("siga Intentando")  
    }  


console.log(acumulador); 
console.log(intentosRestantes)
}