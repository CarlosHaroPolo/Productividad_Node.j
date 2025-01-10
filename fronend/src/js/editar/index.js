const botonGuardarEdicion = document.querySelector(".btnEditar");
botonGuardarEdicion.addEventListener('click', function () {

    if (currentWeek.idActivityEditar != 0) {
        cantidadHoras = document.querySelector("#cantidadHoras");



        if (currentWeek.hourActivityEditar != cantidadHoras.value) {
            ActualizarDato('http://localhost:3000/api/ra/', currentWeek.idActivityEditar, { "hour": cantidadHoras.value}).then(()=>{
              
            });
        }
        crearNotificacion("SE EDITO CORRECTAMENTE LA ACTIVIDAD DE HOY!!","linear-gradient(to right, #2563EB, #1D4ED8)","#ffffff");

         // ahora actualiza la tabla 
         actualizarTabla();
    }











});

