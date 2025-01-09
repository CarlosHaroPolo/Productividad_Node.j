

// ejecutar esa tabla 
actualizarTabla();

function actualizarTabla(){
    fillHeader();     //actualizar la cabecera 
    clearTable();// limpiar table 
    obtenerYUsarDatos().then(()=>{
        const idDiaHoy= idDiaActualCurrentWeek();
        const activityArray = currentWeek.days[idDiaHoy].activityArray;
        console.log(activityArray);
        const divs = document.querySelectorAll(".EditarActivity");
        divs.forEach(div => {
            // Para cada div, seleccionamos el botón dentro de ese div
            const textoP = div.querySelector('p').textContent;

            const boton = div.querySelector('button.btn.btn-dark');
          
            // Añadimos un evento de clic al botón
            boton.addEventListener('click', function() {
            // ya tengo el vaor del textP tengo que buscar 


              alert( `${textoP}---¡Botón presionado!`);
            });
          });
    
    });


}


