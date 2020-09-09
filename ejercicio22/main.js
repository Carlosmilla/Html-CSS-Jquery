function cambiarColori() {
    document.getElementById("1").style.backgroundColor = "red";
    document.getElementById("25").style.backgroundColor = "red";
}
cambiarColori();

var celdas = document.getElementsByClassName("celda");


for(var i=0; i<celdas.length; i++) {
    celdas[i].onclick = function() {
        this.style.backgroundColor = "red";
    }
}

function confColor () {
    if (celdas[i].style.backgroundColor == "red"){
        alert("ya esta marcada esa celda")
    }
}