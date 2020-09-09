$('#arriba').click(function () {
    $('#box').animate({
        marginTop: "-=10px"
    }, 1000, function () {
    });
});

$('#abajo').click(function () {
    $('#box').animate({
        marginTop: "+=10px"
    }, 1000, function () {
    });
});

$('#izquierda').click(function () {
    $('#box').animate({
        marginLeft: "-=10px"
    }, 1000, function () {
    });
});

$('#derecha').click(function () {
    $('#box').animate({
        marginLeft: "+=10px"
    }, 1000, function () {
    });
});

$('#reset').click(function () {
    $("#box").removeAttr('style');
});
