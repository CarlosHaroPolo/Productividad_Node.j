



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

    // Recorrer todas las filas
    for (let i = 0; i < maxFila; i++) { 
        const fila = document.createElement('tr');  
        for (let index = 0; index < 7; index++) {
            let hora = 0;  
            let activity = '';  
            if (semana[index] && semana[index][i]) {
                activity = semana[index][i].fk_activity.activity;  // Asignar actividad
                hora = semana[index][i].hour;  // Asignar hora
            }
         
            const celda1 = document.createElement('td');
            celda1.textContent = hora;  
            celda1.classList.add("currentActivity");
            fila.appendChild(celda1);  

            const celda2 = document.createElement('td');
            celda2.textContent = activity;  // Asignamos la actividad
            celda2.classList.add("currentActivity");
            fila.appendChild(celda2);  
        }

        // Añadir la fila completa a la tabla
        tabla.appendChild(fila);
       
     


    }
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
        }

     console.log(semana);
       fillFila(semana,maxActivity(data));
       

    }



//-----seleccionar la tabla 

    obtenerYUsarDatos();

