function fun() {
   var acumulador = 0;
   var txt = document.getElementById("txt").value;

   if (txt == "") {
       document.getElementById("mensaje").innerHTML = "No ingreso un valor valido"
       return false;
}

if (isNaN(txt)) {
    alert("debe ingresar solo Numeros")
    document.getElementById("txt").value= "";
    document.getElementById("mensaje").innerHTML="";
} else{
     for (let indice = 1; indice <= txt; indice++){
         acumulador = acumulador + indice;
     }
     var resul = document.getElementById("mensaje").innerHTML = acumulador;
}
}
