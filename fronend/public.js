
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
