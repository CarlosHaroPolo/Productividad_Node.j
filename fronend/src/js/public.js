class Day {
    constructor(id,text,day) {
        this.id = id;
        this.text=text;
        this.day = day;
        this.totalHora = 0;
        this.activityArray = [];
    }

    setId(newId) {
        this.id = newId;
    }
    setDay(newDay) {
        this.day = newDay;
    }
    setTotalHora(newTotalHora) {
        this.totalHora = newTotalHora;
    }
    setActivityArray(newActivityArray) {
        this.activityArray = newActivityArray;
    }
    // Método para agregar una actividad
    addActivity(activity) { 
        this.activityArray.push(activity);
    }
    getActivityArray() {
        return this.activityArray;
    }
    limpiarActivity(){
        this.activityArray = [];
    }

}
class Week {
    constructor() {
        this.days = [
            new Day(0, "LUNES"),
            new Day(0, "MARTES"),
            new Day(0, "MIÉRCOLES"),
            new Day(0, "JUEVES"),
            new Day(0, "VIERNES"),
            new Day(0, "SÁBADO"),
            new Day(0, "DOMINGO")
        ];
        this.idActivityEditar=0;
        this.hourActivityEditar=0;
    }
}
//inicializar mi currentWeek
let currentWeek = new Week();
// inicializar mi pastWeek
let pastWeek = new Week();


async function obtenerDatos(URL) {
    try {
        let response = await fetch(URL);

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        let data = await response.json();
        return data; // Aquí devolvemos los datos recolectados
    } catch (error) {
        console.log('Hubo un error: ', error);
    }
}
//------------------------------------------------------
async function registrarDatos(URL, data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })  // Encapsulamos los datos en una propiedad 'data'
    };
    try {
        const response = await fetch(URL, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log('Success:', responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}

function idDiaActualCurrentWeek(){
    for (let index = 6; index >= 0; index--) {
        if (currentWeek.days[index].id != null) {
            return index;
        }
    }
}

function cambiarFecha(fecha) {

    let fch = document.querySelector(".fechaActual");

    fch.textContent = fecha;
}

//convertir a la hora que a estring al formato DIA/MES/AÑO
function mostrarFecha(fch, agregardia) {
    let fecha = new Date(fch);
    fecha.setDate(fecha.getDate() + agregardia); // Sumar un día
    let dia = fecha.getUTCDate();
    let mes = fecha.getUTCMonth() + 1;
    let año = fecha.getUTCFullYear();
    if (dia < 10) dia = '0' + dia;
    if (mes < 10) mes = '0' + mes;
    return `${dia}/${mes}/${año}`;
}
function agregarSelect(clase, id, value) {
    const select = document.querySelector(`.${clase}`);
    let elementoOpcion = document.createElement('option');
    elementoOpcion.value = id;
    elementoOpcion.textContent = value;
    select.appendChild(elementoOpcion);
}


async function ActualizarDato(URL, id, data) {
    const endpoint = `${URL}${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })  // Encapsulamos los datos en una propiedad 'data'
    };

    try {
        const response = await fetch(endpoint, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json(); // o response.text() si la respuesta no es JSON
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
function crearNotificacion(contenido,backgroundColor,textColor){
    Toastify({
        text: contenido,
        duration: 3000, // Tiempo en pantalla
        close: true, // Muestra un botón para cerrar el toast
        gravity: "top", // Puede ser 'top' o 'bottom'
        position: 'center', // Puede ser 'left', 'center', o 'right'
        backgroundColor: backgroundColor, // Estilo de color del fondo
        textColor: textColor // Estilo de color del texto
      }).showToast();
}


