function procesar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var Fnacimiento = document.getElementById("fn").value;
    var telefono = document.getElementById("telefono").value;
    var educacion = document.getElementById("curso").value; 
    var direccion = document.getElementById("direccion").value;
    var ciudad = document.getElementById("ciudad").value;
    var region = document.getElementById("region").value;
    const pattern = new RegExp('^[A-Z]+$', 'i');

    if (nombre === "" || apellido === "" || Fnacimiento === "" || telefono === "" || direccion === "" || ciudad === ""){
        alert("Todos los campos son Obligatorios!");
        return false;
    } else if (isNaN(telefono)){
        alert ("debe ingresar numeros en telefono");
        return false;
    }else if (nombre.length>30){
        alert("el nombre es muy largo")
        return false;
    } else if (apellido.length>50) {
        alert ("Los apellidos son muy largos");
        return false;
    } else if (telefono.length>12 || telefono.length<7) {
        alert ("telefono ingresado no valido");
        return false;
    } else if (direccion.length>100){
        alert ("La direccion es muy larga");
        return false;
    } else if (ciudad.length>30){
        alert ("El nombre de la ciudad es muy larga");
        return false;
    } else if (!pattern.test(nombre)){
        alert ("nombre solo debe llevar letras");
        return false;
    } else if (!pattern.test(apellido)){
        alert ("apellido solo debe llevar letras");
        return false;
    }
    calcularEdad(Fnacimiento);
    calcularMes(Fnacimiento);
    //calcularDia(Fnacimiento);
    alert ("El nombre es: "+nombre+" "+apellido+ " Tiene: "+calcularEdad(Fnacimiento)+" años y " +calcularMes(Fnacimiento)+" meses");
    //document.querySelector("#edad").textContent = "La edad es: "+calcularEdad(Fnacimiento);
    //document.querySelector("#mes").textContent = "Los meses son: "+calcularMes(Fnacimiento);
    //document.querySelector("#dia").textContent = "Los dias son: "+calcularDia(Fnacimiento);
}


function calcularEdad(Fnacimiento) {
    var hoy = new Date();
    var cumpleaños = new Date(Fnacimiento);
    var edad = hoy.getFullYear() - cumpleaños.getFullYear();
    var m = hoy.getMonth() - cumpleaños.getMonth();

    if (m<0 || (m === 0 && hoy.getDate() < cumpleaños.getDate())) {
        edad--;
    } 
    return edad; 
}

function calcularMes(Fnacimiento) {
    var hoy = new Date();
    var cumpleaños = new Date(Fnacimiento);
    var edad = hoy.getFullYear() - cumpleaños.getFullYear();
    var m = hoy.getMonth() - cumpleaños.getMonth();

    if (m<0 || (m === 0 && hoy.getDate() < cumpleaños.getDate())) {
        m--;
    } 
    return m; 
}

/*/function calcularDia(Fnacimiento) {
    var hoy = new Date();
    var cumpleaños = new Date(Fnacimiento);
    var edad = hoy.getFullYear() - cumpleaños.getFullYear();
    var m = hoy.getMonth() - cumpleaños.getMonth();
    var d = hoy.getDay() - cumpleaños.getDay()

    if (m<0 || (m === 0 && hoy.getDate() < cumpleaños.getDate())) {
        d--;
    } 
    return d; 
}/*/

procesar();

