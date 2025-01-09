//  tienes que  mostrar todo los tipos 

async function typeGet() {
    const datas = await obtenerDatos('http://localhost:3000/api/types/'); // Aquí se obtiene la información de la API 
    datas.forEach(data => {
        agregarSelect("selectType", data.id, data.type);

    });

}
typeGet();

// escuchar el click del button 
let crearNuevoActividad = document.querySelector(".crearNuevoActividad");
crearNuevoActividad.addEventListener('click', async function () {

    let selectType = document.querySelector(".selectType");
    let nuevaActividad = document.querySelector(".nuevaActividad");
    console.log(nuevaActividad.value);
    nuevaActividad = nuevaActividad.value.toString().toUpperCase();
    selectType = parseInt(selectType.value);
    // primero vamos a buscar todo las actividades para verificar si es actividad repetida 
    let datas = await obtenerDatos('http://localhost:3000/api/activities/'); // Aquí se obtiene la información de la API

    const result = datas.filter((item) => item.activity === nuevaActividad);
    if (result.length != 0) {
        // tienes que colocar la función de Notificacion
        crearNotificacion("ERROR:ELEMENTO ACTIVIDAD DUPLICADO!!.", "red", "white")
        return
    }
    registrarDatos('http://localhost:3000/api/activities/', { 'activity': nuevaActividad, 'description': '', 'idType': selectType })
        .then(() => {
            console.log("registrado!!");
            // Primero elimino las otras opciones 
            const select = document.querySelector(".selectActivity");
            select.innerHTML = '';
            selectType.value = 1;
            nuevaActividad.value = '';
            // Ahora ejecutar la función que recupera las nuevas actividades y actualiza el select
            activityGet().then(() => {
                console.log("se actualizo lo que quieres");
                crearNotificacion("Se creó correctamente una nueva actividad.", "#28b463", "#ffffff");



            }).catch(error => {
                console.error("Error al actualizar las actividades: ", error);
            });


        })
        .catch(error => {
            console.error("Error al registrar los datos: ", error);
        });
});