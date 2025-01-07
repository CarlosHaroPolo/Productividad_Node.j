//  tienes que  mostrar todo los tipos 

async function typeGet() {
    const datas = await obtenerDatos('http://localhost:3000/api/types/'); // Aquí se obtiene la información de la API 
    datas.forEach(data => {
        agregarSelect("selectType", data.id, data.type);

    });

}
typeGet();

// escuchar el click del button 
let  crearNuevoActividad = document.querySelector(".crearNuevoActividad");

crearNuevoActividad.addEventListener('click', function() {
     
    let selectType = document.querySelector(".selectType");
    let nuevaActividad = document.querySelector(".nuevaActividad");
    nuevaActividad = nuevaActividad.value.toString().toUpperCase();
    selectType=parseInt(selectType.value);
    registrarDatos('http://localhost:3000/api/activities/', {'activity': nuevaActividad, 'description': '', 'idType': selectType})
    .then(() => {
        console.log("registrado!!");
        // Primero elimino las otras opciones 
        const select = document.querySelector(".selectActivity");
        select.innerHTML = '';
        selectType.value=1;
        nuevaActividad.value='';
        // Ahora ejecutar la función que recupera las nuevas actividades y actualiza el select
        activityGet().then(() => {
            console.log("se actualizo lo que quieres");
        }).catch(error => {
            console.error("Error al actualizar las actividades: ", error);
        });
    })
    .catch(error => {
        console.error("Error al registrar los datos: ", error);
    });
});