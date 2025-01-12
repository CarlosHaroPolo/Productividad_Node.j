let myChart; // Variable global para mantener la referencia al gráfico

// Función para crear el gráfico inicialmente
function crearGrafico() {
    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Pasado',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false
            }, {
                label: 'Actual',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Función para actualizar los datos del gráfico
function actualizarDatosGrafico(currentWeek, pastWeek) {
    const arregloCurrentWeek = [];
    const arregloPastWeek = [];

    // Llenar los arreglos con datos
    for (let index = 0; index < 7; index++) {
        arregloCurrentWeek.push(currentWeek.days[index].totalHora);
        arregloPastWeek.push(pastWeek.days[index].totalHora);
    }
    console.log(arregloCurrentWeek);
    console.log(arregloPastWeek);
    // Actualizar datos si el gráfico ya existe
    if (myChart) {
        myChart.data.datasets[0].data = arregloPastWeek;
        myChart.data.datasets[1].data = arregloCurrentWeek;
        myChart.update();
    } else {
        console.error('El gráfico no ha sido inicializado.');
    }
}
