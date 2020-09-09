/* function coordenadas(event) { // funcion llamada en body
    x = event.clientX; // posicion x
    y = event.clientY; // posicion y
    
    document.getElementById("x").value = x; // se le asigna al input x el valor de x
    document.getElementById("y").value = y; // lo mismo para y

    var body = document.getElementById("body"); 
}   

body.addEventListener("dblclick", function() { // funcion utilizada para imprimir en el text area

    var x1 = window.event.clientX;
    var y1 = window.event.clientY;
    
    var test = document.getElementById("txt1"); // se asigna el contenedor a una variable
    var parrafo = document.createElement("p"); // se crea un parrafo 
    parrafo.textContent = "X= " +x1+ " y= "+y1; // se le da los datos al parrafo
    test.appendChild(parrafo); // se le asigna el parrafo a la variable que tiene el contenedor
});
 */
//var reset = document.getElementById("btn"); // se le asigna la variable al boton 

//reset.addEventListener("click", function() { // se llama la variable y se aplica la funcion
//    document.getElementById("txt").innerHTML = ""; // se cambia el contenido por ""
//})


// definiendo elementos
var textarea = document.getElementById("txt1");
var textarea2 = document.getElementById("txt2");
var body = document.getElementById("body");

// obtener coordenadas x y mouse move
window.onmousemove = function (){
    var x = window.event.clientX;
    var y = window.event.clientY;
    textarea.value = x+','+y;
}

// al hacer click en body se va ingresando al textarea2 el valor de la coordenada en el textarea 
body.addEventListener("click", function() {
    textarea2.value += " coordenada: "+textarea.value+"\n";
});
