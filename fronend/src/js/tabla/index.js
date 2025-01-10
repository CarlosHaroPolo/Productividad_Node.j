

// ejecutar esa tabla 
actualizarTabla();

function actualizarTabla() {
    fillHeader();     //actualizar la cabecera 
    clearTable();// limpiar table 
    obtenerYUsarDatos().then(() => {
        const idDiaHoy = idDiaActualCurrentWeek();
        const activityArray = currentWeek.days[idDiaHoy].activityArray;
        const divs = document.querySelectorAll(".EditarActivity");
        divs.forEach(div => {
            // Para cada div, seleccionamos el botón dentro de ese div
            const textoP = div.querySelector('p').textContent;

            const boton = div.querySelector('button.btn.btn-dark');

            // Añadimos un evento de clic al botón
            boton.addEventListener('click', function () {
                // ya tengo el vaor del textP tengo que buscar 
                // cambiar el nombre 
                const filteredActivities = activityArray.filter(activity => activity.fk_activity.activity === textoP)[0];                
                currentWeek.idActivityEditar = filteredActivities.id;
                currentWeek.hourActivityEditar=filteredActivities.hour;
                textActidad = document.querySelector(".textActidad");
                textActidad.textContent = textoP;
                // editar cantidadHoras
                textActidad = document.querySelector("#cantidadHoras");
                textActidad.value = filteredActivities.hour;


            })





        });

    });


}



