var flag = false;
var turno = 0;
var tablero = new Array(); // se asigna el tablero como un array

window.onload = function() { // funcion que se inicia al cargar el documento
    var iniciar = document.getElementById("iniciar"); // se consigue la id del boton
    iniciar.addEventListener("click",comenzar); // se aplica un escucha de elemento "click" y se le asigna la funcion comenzar
}

function comenzar(){
    flag = true; // elemento booleano que determina si se inicio o no el juego

        tablero[0] = document.getElementById("b0") // se le dan las posiciones de los botones al array
        tablero[1] = document.getElementById("b1")
        tablero[2] = document.getElementById("b2")
        tablero[3] = document.getElementById("b3")
        tablero[4] = document.getElementById("b4")
        tablero[5] = document.getElementById("b5")
        tablero[6] = document.getElementById("b6")
        tablero[7] = document.getElementById("b7")
        tablero[8] = document.getElementById("b8")

        for(var i=0;i<9;i++){ // se genera un for que recorra el arreglo
            //tablero[i].className = "botonInicial"; //para css
            tablero[i].value = "-"; // se le asigna el valor i a cada elemento previo al inicio del juego
        }

        turno = 1; // se establece el turno en 1
        document.getElementById("turnoJugador").innerHTML = "Que inicie el juego!"; 
}


function colocar(boton){ // funcion que se aplica directamente a los botones en "onclick"
    if(flag==true){ // se verfiica que el inicio sea true
        if(turno==1 && boton.value=="-"){ // condicion que verifica el turno y que la posiciones seleccionada tenga un valor I
            turno = 2; // se establece el turno 2
            boton.value = "X"; // se cambia el valor i por el valor X
        }else{
            // mismo proceso pero con el turno 2 y el valor i se cambia por O
            if(turno==2 && boton.value=="-"){ 
                turno = 1;
                boton.value = "O";
            }
        }
    }
    ganador(); // se llama a la funcion ganador
}

function ganador() { // funcion que se aplica dentro de colocar()
    if((tablero[0].value == "X" && tablero[1].value == "X" && tablero[2].value == "X") // se comparan las 8 posibilidades de ganar con las posiciones de arreglo
      || (tablero[3].value == "X" && tablero[4].value == "X" && tablero[5].value == "X")// y con el valor de i, si existen estas variables se determina al ganador
      || (tablero[6].value == "X" && tablero[7].value == "X" && tablero[8].value == "X")
      || (tablero[0].value == "X" && tablero[3].value == "X" && tablero[6].value == "X")
      || (tablero[1].value == "X" && tablero[4].value == "X" && tablero[7].value == "X")
      || (tablero[2].value == "X" && tablero[5].value == "X" && tablero[8].value == "X")
      || (tablero[0].value == "X" && tablero[4].value == "X" && tablero[8].value == "X")
      || (tablero[2].value == "X" && tablero[4].value == "X" && tablero[6].value == "X")
    ){
        alert("Jugador X Gano "); 
        flag = false; // se declara la flag como false y termina el juego
    } 
    if((tablero[0].value == "O" && tablero[1].value == "O" && tablero[2].value == "O")
    || (tablero[3].value == "O" && tablero[4].value == "O" && tablero[5].value == "O")
    || (tablero[6].value == "O" && tablero[7].value == "O" && tablero[8].value == "O")
    || (tablero[0].value == "O" && tablero[3].value == "O" && tablero[6].value == "O")
    || (tablero[1].value == "O" && tablero[4].value == "O" && tablero[7].value == "O")
    || (tablero[2].value == "O" && tablero[5].value == "O" && tablero[8].value == "O")
    || (tablero[0].value == "O" && tablero[4].value == "O" && tablero[8].value == "O")
    || (tablero[2].value == "O" && tablero[4].value == "O" && tablero[6].value == "O")
  ){
      alert("Jugador O Gano");
      flag = false;
  }

}