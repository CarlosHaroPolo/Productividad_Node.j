



function contarActivity(data, id) {
    return data.filter(item => item.idRecord == id).length;
}

function maxActivity(data) {
    let arreglo = [];
    for (let index = 0; index < 7; index++) {
        if (currentWeek[index].id > 0) {
            id = currentWeek[index].id;
            arreglo.push(contarActivity(data, id));
        } else {
            arreglo.push(0);
        }
    }
    return Math.max(...arreglo);
}

function fillFila(semana, maxFila) {
    const tabla = document.querySelector('.t2 tbody');
    let horasTotales = new Array(7).fill(0);
    // Construir las filas con actividades y horas
    for (let i = 0; i < maxFila; i++) {
        const fila = crearFilaActividades(semana, horasTotales, i);
        tabla.appendChild(fila);
    }
    // Añadir la fila de totales a la tabla
    const filaTotales = crearFilaTotales(horasTotales);
     // actualizar la informacion de currentWeek
     for (let index = 0; index < 7; index++) {
       currentWeek[index].totalHora=horasTotales[index];
     }
    tabla.appendChild(filaTotales);
}

function crearFilaActividades(semana, horasTotales, filaIndex) {
   

    const fila = document.createElement('tr');
    for (let dia = 0; dia < 7; dia++) {
        let hora = 0;
        let activity = '';
        if (semana[dia] && semana[dia][filaIndex]) {
            activity = semana[dia][filaIndex].fk_activity.activity;
            hora = parseInt(semana[dia][filaIndex].hour, 10);
            horasTotales[dia] += hora;
        }
        appendCelda(fila, hora, "currentActivity");
        appendCelda(fila, activity, "currentActivity");
    }
    return fila;
}

function appendCelda(fila, contenido, clase) {
    const celda = document.createElement('td');
    celda.textContent = contenido;
    celda.classList.add(clase);
    fila.appendChild(celda);
}

function crearFilaTotales(horasTotales) {
    const fila = document.createElement('tr');
    for (let dia = 0; dia < 7; dia++) {
        appendCelda(fila, horasTotales[dia], "currentActivity");
        appendCelda(fila, 'TOTAL', "currentActivity");
    }
    return fila;
}
    function llenarColumna(data, index) {
        if (currentWeek[index].id != null) {
            return data.filter(item => item.idRecord == currentWeek[index].id)
        }
        return undefined;
    }

    async function obtenerYUsarDatos() {
        let data = await obtenerDatos('http://localhost:3000/api/ra/'); // Aquí se obtiene la información de la API
        let semana = [];
        for (let index = 0; index < 7; index++) {
            semana.push(llenarColumna(data, index));
            currentWeek[index].ActivityArray.push(llenarColumna(data, index));
            // ademas quiero llenar el de curren 
        }
        console.log("current");

        console.log(currentWeek);

       fillFila(semana,maxActivity(data));
       

    }



//-----seleccionar la tabla 

    //obtenerYUsarDatos();

/*
  
*/