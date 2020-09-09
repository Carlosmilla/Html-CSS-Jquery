$('p').click(function(){ // se llama a los parrafos
    $(this).hide(); // se selecciona solo al parrafo clickeado
})

$('#idbtn').click(function(){ // se aplica la funcion en el id de botones
    $('p').show(); //se muestran todos lo p escondidos
})