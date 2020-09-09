var circle = document.getElementById('circle').getContext('2d');

circle.fillStyle= "red";
circle.arc(100, 100, 50, 0, 2*Math.PI);
circle.fill();


var tri = document.getElementById('triangle').getContext('2d');

tri.fillStyle= "red";
tri.moveTo(100, 50);
tri.lineTo(50, 150);
tri.lineTo(150, 150);
tri.fill();

var sqr = document.getElementById('square').getContext('2d');

sqr.fillStyle= "red";
sqr.rect(50, 50, 100, 100);
sqr.fill();

// no pude encontrar como cambiarles el color o moverlas de posicion con funciones


