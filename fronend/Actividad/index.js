async function activityGet() {
    const datas = await obtenerDatos('http://localhost:3000/api/activities/'); // Aquí se obtiene la información de la API

    datas.sort((a, b) => {
        // Primero comparamos por 'idType'
        if (a.idType !== b.idType) {
            return a.idType - b.idType;
        }
        // Si 'idType' es igual, comparamos por 'activity'
        if (a.activity < b.activity) {
            return -1;
        }
        if (a.activity > b.activity) {
            return 1;
        }
        return 0;
    });

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


activityGet();

// el button para registrar 
let registrarACtividad = document.querySelector(".registrarACtividad");
registrarACtividad.addEventListener('click',  function () {


    let idACtivity = 0;
    let activityHours = 0;
    // primero lee los valores que tines dentro de 
    const selectElement = document.querySelector(".selectACtivity");
    idACtivity = parseInt(selectElement.value);
    // sacar las horas de 
    const inputHours = document.querySelector(".HoursActivity");
    activityHours = parseFloat(inputHours.value);

    console.log(`${idACtivity}/${activityHours}`)


    // encontrar el id del dia 
    let id = 0;
    for (let index = 6; index >= 0; index--) {
        if (currentWeek[index].id != null) {
            id = index;
            console.log(index);
            break;
        }
    }
    let flag = 1; // SI 
    // tengo todo el arreglo ver si no esta intentado agregar una actividad que ya esta registrada 
    currentWeek[id].ActivityArray.forEach(element => {
        if (element.idActivity == idACtivity) {
            console.log("ELEMENTO DUPLICADO!!!")
            flag = 0;
        }
    });
    //----------------------------------------------------------------------------------------------------------------------------------

    // ahora si el flag es=1 puedes registrar sin problemas la actividad 
    if (flag == 1) {
      registrarDatos('http://localhost:3000/api/ra/', { "idRecord": currentWeek[id].id, "idActivity": idACtivity, "hour": activityHours });
      console.log("REGISTRADO!!");
      // actualiza 
      actualizarTabla();
    }
});
