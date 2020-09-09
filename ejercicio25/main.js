function calcular() {

    var pesos = document.getElementById("pesos").value;
    var mensaje = "";
    var tipomensaje = "";

    var dolar = document.getElementById("dolar").checked;
    var yen = document.getElementById("yen").checked;
    var euro = document.getElementById("euro").checked;
    var yuan = document.getElementById("yuan").checked;
    var rublo = document.getElementById("rublo").checked;

    var resultado = 0;

    if (pesos != "") {

        if (!isNaN(pesos)) {

            if (dolar == true || yen == true || euro == true || yuan == true || rublo == true) {

                if (dolar == true) {
                    resultado = pesos * 0.0013;
                } else if (yen == true) {
                    resultado = pesos * 0.14;
                } else if (euro == true) {
                    resultado = pesos * 0.0011;
                } else if (yuan == true) {
                    resultado = pesos * 0.0092;
                } else if (rublo == true) {
                    resultado = pesos * 0.089;
                }

                mensaje = "conversion realizada";
                tipomensaje = "listo!";
                document.getElementById('resultado').value = resultado;
            }
            else{
                mensaje = "Debe seleccionar una divisa.";
                tipomensaje = "error";
            }
        }
        else{
            mensaje = "El monto ingresado no es un número";
            tipomensaje = "error";
        }

    }
    else{
        mensaje = "Debe ingresar un monto";
        tipomensaje = "error";
    }

 
    if (mensaje != ""){
       var estilo = "";

       if (tipomensaje == "ok"){
           estilo = "background-color: green; color: white;";
       }
       else{
           estilo = "background-color: red; color: white;";
       } 
 
       document.getElementById('contenedor').innerHTML = '<div style="' + estilo + '">' + mensaje + '</div>';
    }
}


calcular();