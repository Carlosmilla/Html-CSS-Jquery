$(function () {
    $("#drag").draggable();
    $("#tabs").tabs();
    $("#puntaje").selectmenu();
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    //$("#dialog").hide();
});

$(document).ready(function () {

    $('#verpuntaje').click(
        function () {
            var valor = document.getElementById('puntaje').value;
            var mensaje = "La opcion seleccionada es: " + valor;
            //alert(mensaje);
            $('#dialog').html(mensaje);
            //$("#dialog").show();
            $("#dialog").dialog("open");
        }
    );

});