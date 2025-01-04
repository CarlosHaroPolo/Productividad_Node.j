// aca te vas a encargar de llenar 



function modificarTable(tr, th, fecha) {
    th=th+1;
    const celda = document.querySelector(`.t2 tbody tr:nth-child(${tr}) th:nth-child(${th})`);
        
    // Verificar si la celda fue encontrada
    if (celda) {
        // Cambiar el contenido de la celda
        celda.textContent = fecha;
    } else {
        console.error("No se pudo encontrar la celda.");
    }
   
}

   


  //actualizarIdCurrentWeek(i,5,0);
  function actualizarIdCurrentWeek(data, i, e, flag) {
    try {
        if (data[i + flag]) {
            currentWeek[e].id = data[i + flag].id;
            currentWeek[e].day=data[i + flag].date;

        } else {
            currentWeek[e].id = null;
            currentWeek[e].day=null;
        }
    } catch (e) {
        // Captura cualquier otro error y lo maneja
     
    }
}
// Llamamos a la función y usamos await para obtener el resultado
async function fillHeader() {
    let data = await obtenerDatos('http://127.0.0.1:3000/api/record'); // Aquí se obtiene la información de la API
    let i=data.length-1 ;
    let last = data[i];
   // actualizar mostrar el date  
   console.log(last.date);
   cambiarFecha(mostrarFecha(last.date,0),last.id);
  //last.day=1 es lunes y last.day7 es domingo 
   
    // mi idea es idententiifcar el dia luego colocar la fehca y tener guardadlo el id para que luego en el r_a pueda ver a queier pertenece tu pédes carlos 
    for (let index = 0; index < 7; index++) {
      let flag =index-last.day;
      modificarTable(1, index,mostrarFecha(last.date,flag));
      actualizarIdCurrentWeek(data,i,index,flag);
    }
  

}

// Llamamos a la función para obtener los datos
//fillHeader();
// Llamada para modificar el primer <th> (de la primera fila, primera columna) en la tabla