var img=1;
var imagen = document.getElementById("imagen");
        imagen.src = "./img/img"+img+".jpg";

function sigimg() {
    img++;
    if(img>5)
        img = 1;
        var imagen = document.getElementById("imagen");
        imagen.src = "./img/img"+img+".jpg";
    
}

function antimg() {
    img--;
    if(img<1) 
        img=5;
        var imagen = document.getElementById("imagen");
        imagen.src = "./img/img"+img+".jpg";
    
}


function azarimg() {
    var imagen = document.getElementById("imagen");
    var azar = Math.round(Math.random(0)*4);
    imagen.src = "./img/img"+azar+".jpg"; 
}

