$("#formval").validate({
    rules: {
        name: {
            required: true,
            maxlength: 25
        },
        apellido: {
            required: true,
            maxlength: 30
        },
        correo: {
            required: true,
            maxlenght: 50
        },
        edad: {
            required: true,
            number: true,
            min: 0,
            max: 150

        },
        telefono: {
            required: true,
            number: true


        },
        messages: {
            name: {
                required: "Debe ingresar un nombre del articulo",
                maxlength: "Máximo 30"
            },
            apellido: {
                required: "Debe ingresar una marca",
                maxlength: "Puede tener hasta un máximo de 50 caracteres"
            },
            correo: {
                required: "Ingrese un correo",
                maxlenght: "maximo 50 letras",
            },
            edad: {
                required: "Ingrese su edad",
                number: "Debe ser un numero",
                min: "Debe ser un numero mayor o igual a cero",
                max: "Debe ser un numero menor o igual a 150"
            },
            telefono: {
                required: "Ingrese un telefono",
                number: "deben ser numeros"
            },
        },
    }
});

$("#btn").click(function () {
    var nomb = document.getElementById("#nombre").value;
    var ape = document.getElementById("#apellido").value;
    var cor = document.getElementById("#correo").value;
    var edad = document.getElementById("#edad").value;
    var tel = document.getElementById("#telefono").value;

    document.getElementById("nom").val = nomb;
    document.getElementById("ape").val = ape;
    document.getElementById("co").val = cor;
    document.getElementById("ed").val = edad;
    document.getElementById("tel").val = "+569 "+tel;
  })

$("#table").tableExport({
    headings: true,                    // (Boolean), display table headings (th/td elements) in the <thead>
    footers: true,                     // (Boolean), display table footers (th/td elements) in the <tfoot>
    formats: ["xls", "csv", "txt"],    // (String[]), filetypes for the export
    fileName: "id",                    // (id, String), filename for the downloaded file
    bootstrap: true,                   // (Boolean), style buttons using bootstrap
    position: "bottom",                 // (top, bottom), position of the caption element relative to table
    ignoreRows: null,                  // (Number, Number[]), row indices to exclude from the exported file(s)
    ignoreCols: null,                  // (Number, Number[]), column indices to exclude from the exported file(s)
    ignoreCSS: ".tableexport-ignore",  // (selector, selector[]), selector(s) to exclude from the exported file(s)
    emptyCSS: ".tableexport-empty",    // (selector, selector[]), selector(s) to replace cells with an empty string in the exported file(s)
    trimWhitespace: false   
});

