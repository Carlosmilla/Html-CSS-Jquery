$(function () {
    $("#cierre").dialog({
        autoOpen: false,
        modal: true
    });
    $("#fin").button().click(function () {
        $("#cierre").dialog("open");
    });
});


$("#formval").validate({
    rules: {
        name: {
            required: true,
            maxlength: 25,
            email: true
        },
        correo: {
            required: true,
            minlenght: 10,
            maxlenght: 50,
            password: true
        },
        password: {
            required: true,
            minlenght: 1,
            maxlength: 30

        }
    },
    messages: {
        name: {
            required: "Debe ingresar su nombre de usuario",
            maxlength: "Máximo 30",
        },
        correo: {
            required: "Ingrese un correo",
            maxlenght: "maximo 50 letras",
        },
        password: {
            required: "Debe ingresar su contraseña",
            maxlength: "Puede tener hasta un máximo de 30 caracteres",
        },

    },

});

