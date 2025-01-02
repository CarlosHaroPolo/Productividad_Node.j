// aca te vas a encargar de llenar 
class day {
    constructor(day, date) {
        this.day = day;
        this.date = date;
    }
}


let currentWeek = [
    {
        "id": 0,
        "day": "LUNES"
    },
    {
        "id": 0,
        "day": "MARTES"
    },
    {
        "id": 0,
        "day": "MIÉRCOLES"
    },
    {
        "id": 0,
        "day": "JUEVES"
    },
    {
        "id": 0,
        "day": "VIERNES"
    },
    {
        "id": 0,
        "day": "SÁBADO"
    },
    {
        "id": 0,
        "day": "DOMINGO"
    },
]

//hora ver preguntar por todo los record consumiendo la api get 
async function obtenerDatos() {
    try {
        let response = await fetch('http://127.0.0.1:3000/api/record');

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        let data = await response.json();
        return data; // Aquí devolvemos los datos recolectados
    } catch (error) {
        console.log('Hubo un error: ', error);
    }
}


function modificarTable(tr, th, fecha) {
    const celda = document.querySelector(`.t2 tbody tr:nth-child(${tr}) th:nth-child(${th})`);
        
    // Verificar si la celda fue encontrada
    if (celda) {
        // Cambiar el contenido de la celda
        celda.textContent = fecha;
    } else {
        console.error("No se pudo encontrar la celda.");
    }
   
}

   

 //convertir a la hora que quiero
  function  mostrarFecha(fch,agregardia) {
    let fecha = new Date(fch); 
    fecha.setDate(fecha.getDate() + agregardia); // Sumar un día
    let dia = fecha.getUTCDate();
    let mes = fecha.getUTCMonth() + 1; 
    let año = fecha.getUTCFullYear();
    if (dia < 10) dia = '0' + dia;
    if (mes < 10) mes = '0' + mes;
    return `${dia}/${mes}/${año}`;
  }
  //actualizarIdCurrentWeek(i,5,0);
  function actualizarIdCurrentWeek(data, i, e, flag) {
    try {
        if (data[i + flag]) {
            currentWeek[e - 1].id = data[i + flag].id;
        } else {
            console.log(`No se encontró el índice i+flag: ${i + flag}`);
            currentWeek[e-1].id = null;
        }
    } catch (e) {
        // Captura cualquier otro error y lo maneja
     
    }
}
// Llamamos a la función y usamos await para obtener el resultado
async function obtenerYUsarDatos() {
    let data = await obtenerDatos(); // Aquí se obtiene la información de la API
   console.log(data);
    let i=data.length-1 ;
    let last = data[i];
    //last.day=1 es lunes y last.day7 es domingo 
   
    // mi idea es idententiifcar el dia luego colocar la fehca y tener guardadlo el id para que luego en el r_a pueda ver a queier pertenece tu pédes carlos 
    for (let index = 1; index <= 7; index++) {
      let flag =index-last.day;
      modificarTable(1, index,mostrarFecha(last.date,flag));
      actualizarIdCurrentWeek(data,i,index,flag);
    }
  

}

// Llamamos a la función para obtener los datos
obtenerYUsarDatos();
// Llamada para modificar el primer <th> (de la primera fila, primera columna) en la tabla
