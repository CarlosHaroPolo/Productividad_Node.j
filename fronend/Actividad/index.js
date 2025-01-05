async function activityGet() {
    const datas = await obtenerDatos('http://localhost:3000/api/activities/'); // Aquí se obtiene la información de la API
    
    datas.forEach(data => {
        agregarSelect("selectACtivity", data.id, data.activity);
    });
}

function agregarSelect(clase, id, value) {
    const select = document.querySelector(`.${clase}`);
    let elementoOpcion = document.createElement('option');
    elementoOpcion.value = id;
    elementoOpcion.textContent = value;
    select.appendChild(elementoOpcion);
}


activityGet() ;