$(function () {
    $("#care").resizable(); // da al encabezado la propiedad de cambio de tamaño
    $("#acordion").accordion(); // aplica el estilo de acordion para la seccion indicada
    $("#final").dialog({ // asigna la propiedad dialogo
        autoOpen: false, // define que no se abra de forma autonoma
        modal: true // especifica que al abrirse este tomara el rol principal en la pantalla con los demas elementos por detras
    });

    $("#btn").button().click(function () { // se aplica la funcion al hacer click en el boton
        $("#final").dialog("open"); // se cambia el valor del dialogo a open por lo que al hacer click este se mostrara
    });
});