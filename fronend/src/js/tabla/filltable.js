function contarActivity(data, id) {
    return data.filter(item => item.idRecord == id).length;
}
function maxActivity(data) {
    let arreglo = [];
    for (let index = 0; index < 7; index++) {
        if (currentWeek.days[index].id > 0) {
            id = currentWeek.days[index].id;
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
    for (let i = 0; i < maxFila; i++) {
        const fila = crearFilaActividades(semana, horasTotales, i);
        tabla.appendChild(fila);
    }
    const filaTotales = crearFilaTotales(horasTotales);
    horasTotales.forEach((total, index) => {
        currentWeek.days[index].setTotalHora(total);
    });
    tabla.appendChild(filaTotales);
}
function crearFilaActividades(semana, horasTotales, filaIndex) {
    const fila = document.createElement('tr');
    for (let dia = 0; dia < 7; dia++) {
        let hora = null;
        let activity = '';
        let idDiaHoy = idDiaActualCurrentWeek(); // quiero preguntar por id del dia de hoy del current


        if (semana[dia] && semana[dia][filaIndex]) {
            activity = semana[dia][filaIndex].fk_activity.activity;
            hora = parseInt(semana[dia][filaIndex].hour, 10);
            horasTotales[dia] += hora;
        }
        if (dia == idDiaHoy  ) {
            console.log("ERES ESPECIAL");
            appendCelda(fila, hora, "currentActivity");
            appendCeldEspecial(fila, activity);
        } else {
            appendCelda(fila, hora, "currentActivity");
            appendCelda(fila, activity, "currentActivity");
        }
    }
    return fila;
}
function appendCelda(fila, contenido, clase) {
    const celda = document.createElement('td');
    celda.textContent = contenido;
    celda.classList.add(clase);
    fila.appendChild(celda);
}

//ACA SOLO TE ENCARGAS DE LA PARTE ESPECIAL PARA COLOCAR EL NUMERO UN INPUY ademas del texto agregar un  buttron 
function appendCeldEspecial(fila, contenido) {
    if(contenido!==''){
        const celda = document.createElement('td');    //btnEditarActivity

        celda.innerHTML = `
  <div class="EditarActivity" style="display: flex; align-items: center;">
    <p style="margin: 0 5px;">${contenido}</p>
    <button type="button" class="btn btn-dark" onclick="openModal('modalEditar')">editar</button>
  </div>
`;
        fila.appendChild(celda);
    }
   
}



function crearFilaTotales(horasTotales) {
    const fila = document.createElement('tr');
    for (let dia = 0; dia < 7; dia++) {
        appendCelda(fila, horasTotales[dia], "trColumnaTotal");
        appendCelda(fila, 'TOTAL', "trColumnaTotal");
    }
    return fila;
}
function llenarColumna(data, index) {
    if (currentWeek.days[index].id != null) {
        return data.filter(item => item.idRecord == currentWeek.days[index].id)
    }
    return undefined;
}
async function obtenerYUsarDatos() {
    let data = await obtenerDatos('http://localhost:3000/api/ra/'); // Aquí se obtiene la información de la API
    let semana = [];// aca se guardar arreglos ose 7 que acada uno por dia 
    for (let index = 0; index < 7; index++) {
        semana.push(llenarColumna(data, index));
        if (semana[index] != undefined) {
            for (let i = 0; i < semana[index].length; i++) {
                currentWeek.days[index].addActivity(semana[index][i]);
            }
        }
    }
    fillFila(semana, maxActivity(data));
  
}

function clearTable() {
    var tbody = document.querySelector('.t2 tbody'); //IMPORTANTE 
    var filas = tbody.querySelectorAll('tr');
    for (var i = filas.length - 1; i > 0; i--) {

        filas[i].remove();
    }

}
