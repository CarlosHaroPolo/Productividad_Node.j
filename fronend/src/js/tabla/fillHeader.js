function modificarTable(tr, th, fecha) {
    th=th+1;
    const celda = document.querySelector(`.t2 tbody tr:nth-child(${tr}) th:nth-child(${th})`);
    celda ?  celda.textContent = fecha : console.error("No se pudo encontrar la celda.");   
}
  function actualizarIdCurrentWeek(data, i, e, flag) {
    try {
        if (data[i + flag]) {
            currentWeek.days[e].setId(data[i + flag].id);
            currentWeek.days[e].setDay(data[i + flag].date);
        } else {
            currentWeek.days[e].setId(null);
            currentWeek.days[e].setDay(null);
        }
    } catch (e) {
      console.log(e);     
    }
}
// Llamamos a la función y usamos await para obtener el resultado
async function fillHeader() {
    let data = await obtenerDatos('http://127.0.0.1:3000/api/record'); 
    let i=data.length-1 ;  
    let last = data[i];
   cambiarFecha(mostrarFecha(last.date,0),last.id);
    for (let index = 0; index < 7; index++) {
      let flag =index-last.day; 
       modificarTable(1, index,mostrarFecha(last.date,flag));
      actualizarIdCurrentWeek(data,i,index,flag);
    }
}