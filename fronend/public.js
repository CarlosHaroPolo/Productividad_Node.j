
let currentWeek = [
    {
        "id": 0,
        "day": "LUNES",
        "totalHora": 0
    },
    {
        "id": 0,
        "day": "MARTES",
        "totalHora": 0
    },
    {
        "id": 0,
        "day": "MIÉRCOLES",
        "totalHora": 0
    },
    {
        "id": 0,
        "day": "JUEVES",
        "totalHora": 0
    },
    {
        "id": 0,
        "day": "VIERNES",
        "totalHora": 0
    },
    {
        "id": 0,
        "day": "SÁBADO",
        "totalHora": 0
    },
    {
        "id": 0,
        "day": "DOMINGO",
        "totalHora": 0
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

function cambiarFecha(fecha, id) {

    let fch = document.querySelector(".fechaActual");
    fch.textContent = fecha;

    let identificador = document.querySelector(".fecha_id");
    identificador.textContent = id;
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
    URL = `${URL}${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })  // Encapsulamos los datos en una propiedad 'data'
    };

    fetch(URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // o response.text() si la respuesta no es JSON
        })
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
}

//ActualizarDato('http://localhost:3000/api/record/', '1', data);




