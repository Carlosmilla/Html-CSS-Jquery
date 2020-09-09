var d = new Date();
var dia = new Array (7);
dia[0]="Domingo";
dia[1]="Lunes";
dia[2]="Martes";
dia[3]="Miercoles";
dia[4]="Jueves";
dia[5]="Viernes";
dia[6]="Sabado";

var mes = new Array (12);
mes[1]="Enero";
mes[2]="Febrero";
mes[3]="Marzo";
mes[4]="Abril";
mes[5]="Mayo";
mes[6]="Junio";
mes[7]="Julio";
mes[8]="Agosto";
mes[9]="Septiembre";
mes[10]="Octubre";
mes[11]="Noviembre";
mes[12]="Diciembre";


alert("Hoy es: "+dia[d.getDay()] + " " + d.getDay() + " de " +mes[d.getMonth()] + " del año " + d.getFullYear() + "\n La hora es: " + d.getHours() +"h:"+ d.getMinutes() +"m:"+d.getSeconds() + "s");

function countdown() {
    var now = new Date();
    var eventDate = new Date(now.getFullYear(), 11, 31);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;

    var seg = Math.floor(remTime / 1000);
    var min = Math.floor(seg / 60);
    var hor = Math.floor(min / 60);
    var dia = Math.floor(hor / 24);

    hor %= 24;
    min %= 60;
    seg %= 60;
    

    hor = (hor < 10) ? "0" + hor : hor;
    min = (min < 10) ? "0" + min : min;
    seg = (seg < 10) ? "0" + seg : seg;

    document.getElementById("tiemporestante").innerHTML = "D: "+dia+" H: "+hor+" M: "+min+" S: "+seg;

    setTimeout(countdown, 1000);
}

countdown();