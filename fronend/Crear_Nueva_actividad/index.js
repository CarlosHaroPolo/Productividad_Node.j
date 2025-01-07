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
    nuevaActividad=nuevaActividad.value.toString();
    selectType=parseInt(selectType.value);
   registrarDatos('http://localhost:3000/api/activities/', {'activity':nuevaActividad,'description':'','idType':selectType}) ;
   console.log("registrado!! ");

   // quiero actualizar el selectOpition

   activityGet();
   console.log("se actualizo lo que quieres ")
});