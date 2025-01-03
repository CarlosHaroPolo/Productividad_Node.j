// aca te vas a encargar de llenar 



function modificarTable(tr, th, fecha) {
    const celda = document.querySelector(`.t2 tbody tr:nth-child(${tr}) th:nth-child(${th})`);
        
    // Verificar si la celda fue encontrada
    if (celda) {
        // Cambiar el contenido de la celda
        celda.textContent = fecha;
    } else {
        console.error("No se pudo encontrar la celda.");
    }
   
}

   

 //convertir a la hora que quiero
  function  mostrarFecha(fch,agregardia) {
    let fecha = new Date(fch); 
    fecha.setDate(fecha.getDate() + agregardia); // Sumar un día
    let dia = fecha.getUTCDate();
    let mes = fecha.getUTCMonth() + 1; 
    let año = fecha.getUTCFullYear();
    if (dia < 10) dia = '0' + dia;
    if (mes < 10) mes = '0' + mes;
    return `${dia}/${mes}/${año}`;
  }
  //actualizarIdCurrentWeek(i,5,0);
  function actualizarIdCurrentWeek(data, i, e, flag) {
    try {
        if (data[i + flag]) {
            currentWeek[e - 1].id = data[i + flag].id;
            currentWeek[e-1].day=data[i + flag].date;

        } else {
            currentWeek[e-1].id = null;
            currentWeek[e-1].day=null;
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
    for (let index = 1; index <= 7; index++) {
      let flag =index-last.day;
      modificarTable(1, index,mostrarFecha(last.date,flag));
      actualizarIdCurrentWeek(data,i,index,flag);
    }
  

}

// Llamamos a la función para obtener los datos
//fillHeader();
// Llamada para modificar el primer <th> (de la primera fila, primera columna) en la tabla