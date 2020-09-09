var MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var color = Chart.helpers.color;
var barChartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'], // lo que se ve en la parte inferior del grafico
    datasets: [{ // establecer la informacion
        label: 'Datos 1',
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [ // informacion dada al eje Y de la tabla (en este caso valores aleatorios)
            randomScalingFactor(), 
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Datos 2',
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [ // informacion dada al eje Y de la tabla (en este caso valores aleatorios)
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};
var config = {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [{
            label: 'Mi primer conjunto de datos',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            fill: false, // por que se definen los fill como falso? 
        }, {
            label: 'Mi segundo conjunto',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }]
    },
    options: { 
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js gráfico de línea'
        },
           tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};

var configarea = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Datos area 1'
        }],
        labels: [
            'Grupo 1',
            'Grupo 2',
            'Grupo 3',
            'Grupo 4',
            'Grupo 5'
        ]
    },
    options: {
        responsive: true
    }
};

window.onload = function() {

    var ctx1 = document.getElementById('lineas').getContext('2d'); // se obtiene el espacio a ocupar en una variable
    window.myLine = new Chart(ctx1, config); // se le asigna el conntenido

    var ctx2 = document.getElementById('barras').getContext('2d'); // ""
    window.myBar = new Chart(ctx2, { // ""
        type: 'bar',
        data: barChartData,
        options: { // se establecen como true las posiciones y el titulo del grafico
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de barras'
            }
        }
    });

    var ctx3 = document.getElementById('pastel').getContext('2d'); // ""
    window.myPie = new Chart(ctx3, configarea); // ""
};
