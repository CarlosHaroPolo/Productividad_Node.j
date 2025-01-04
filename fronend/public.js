
let currentWeek = [
    {
        "id": 0,
        "day": "LUNES",
        "totalHora":0
    },
    {
        "id": 0,
        "day": "MARTES",
        "totalHora":0
    },
    {
        "id": 0,
        "day": "MIÉRCOLES",   
         "totalHora":0
    },
    {
        "id": 0,
        "day": "JUEVES",   
         "totalHora":0
    },
    {
        "id": 0,
        "day": "VIERNES",   
         "totalHora":0
    },
    {
        "id": 0,
        "day": "SÁBADO",
        "totalHora":0
    },
    {
        "id": 0,
        "day": "DOMINGO",
        "totalHora":0
    },
]

// funcion que sirve para consumir un get

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

// para colocar la fecha actual 

function cambiarFecha(fecha){

    let fch = document.querySelector(".fechaActual");
    fch.textContent=fecha;
}

 //convertir a la hora que a estring al formato DIA/MES/AÑO
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


// Datos que quieres enviar en el POST request
// EJEMPLO DE COMO UTILIZAR EL CREATE:

/* const xxx  = {
    "totalHours": 8,
    "date": "2025-11-8",
    "state": 0,
    "day": 4
};
console.log('Datos enviados:', xxx);

// Llamamos a la función para registrar los datos
registrarDatos('http://localhost:3000/api/record/', xxx); */


// ACTUALIZAR LA TABLA :
//router.put('/:id', recordController.updateRecord);

// Dato que deseas actualizar



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
  
  //ActualizarDato('http://localhost:3000/api/record/', '1', { "totalHours": 99 });


