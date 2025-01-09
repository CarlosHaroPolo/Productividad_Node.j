async function activityGet() {
    const datas = await obtenerDatos('http://localhost:3000/api/activities/'); // Aquí se obtiene la información de la API
    datas.sort((a, b) => {
        if (a.idType !== b.idType) {
            return a.idType - b.idType;
        }
        if (a.activity < b.activity) {
            return -1;
        }
        if (a.activity > b.activity) {
            return 1;
        }
        return 0;
    });
    datas.forEach(data => {
        agregarSelect("selectActivity", data.id, data.activity);

    });
}



//ejecuta código 
activityGet();

//-----------------------------------------------------------------------------------------------
// el button para registrar 
let registrarActividad = document.querySelector(".registrarActividad");
registrarActividad.addEventListener('click',  function () {

    let idActivity = 0;
    let activityHours = 0;
    const selectElement = document.querySelector(".selectActivity");
    const inputHours = document.querySelector(".HoursActivity");
    idActivity = parseInt(selectElement.value);
    activityHours = parseFloat(inputHours.value);
    let  id=idDiaActualCurrentWeek();
   const dataActivity= currentWeek.days[id].getActivityArray();
    const hasDuplicate = dataActivity.some(element => element.idActivity === idActivity);   
    if (hasDuplicate) {
        crearNotificacion("ERROR:ELEMENTO YA REGISTRADO!!.", "red", "black")
    }else{
        registrarDatos('http://localhost:3000/api/ra/', { "idRecord": currentWeek.days[id].id, "idActivity": idActivity, "hour": activityHours })
        .then(response => {
            console.log("REGISTRADO!!");
            console.log(response); // Optional: Log the response from the server
            //limpiar 
            inputHours.value=0;
            selectElement.value=1;
            actualizarTabla();
            crearNotificacion("La actividad se guardó correctamente para el día de hoy.", "#7d3c98", "#ffffff");

        })
        .catch(error => {
            console.error("Error al registrar datos:", error);
        });
    }
});
