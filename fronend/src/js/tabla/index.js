// Ejecutar esa tabla
actualizarTabla();

function actualizarTabla() {
    AllfillHeader(); // Actualizar todas las cabeceras
    clearTable(currentWeek,"t1"); // Limpiar tabla
    clearTable(pastWeek,"t2"); // Limpiar tabla

    obtenerYUsarDatos(currentWeek,"t1").then(() => {
        const idDiaHoy = idDiaActualCurrentWeek();
        const activityArray = currentWeek.days[idDiaHoy].activityArray;
        const divs = document.querySelectorAll(".EditarActivity");

        divs.forEach(div => {
            // Para cada div, seleccionamos el botón dentro de ese div
            const nombreActividad = div.querySelector('p').textContent; // Renombrado a nombreActividad
            const boton = div.querySelector('button.btn.btn-dark');

            // Añadimos un evento de clic al botón
            boton.addEventListener('click', function () {
                // Buscar la actividad que coincide con el texto
                const actividadSeleccionada = activityArray.find(activity => activity.fk_activity.activity === nombreActividad);

                if (actividadSeleccionada) {
                    currentWeek.idActivityEditar = actividadSeleccionada.id;
                    currentWeek.hourActivityEditar = actividadSeleccionada.hour;

                    // Actualizar la interfaz con la actividad seleccionada
                    let textActividad = document.querySelector(".textActidad");
                    textActividad.textContent = nombreActividad;

                    // Editar cantidadHoras
                    textActividad = document.querySelector("#cantidadHoras");
                    textActividad.value = actividadSeleccionada.hour;
                } else {
                    console.error("Actividad no encontrada para el texto:", nombreActividad);
                }
            });
        });
    }).catch(error => {
        console.error("Error al obtener y usar los datos:", error);
    });

    obtenerYUsarDatos(pastWeek,"t2").then(()=>{  actualizarDatosGrafico(currentWeek, pastWeek)});
    
}