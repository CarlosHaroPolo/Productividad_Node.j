function modificarTable(claseTable, tr, td, fecha) {
  td = td + 1;
  const celda = document.querySelector(`.${claseTable} tbody tr:nth-child(${tr}) td:nth-child(${td})`);
  celda ? celda.textContent = fecha : console.error("No se pudo encontrar la celda.");
}
//pastWeek
function actualizarIdWeek(week,data, i, e, flag) {
  try {
    if (data[i + flag]) {
      week.days[e].setId(data[i + flag].id);
      week.days[e].setDay(data[i + flag].date);
    } else {
      week.days[e].setId(null);
      week.days[e].setDay(null);
    }
  } catch (e) {
    console.log(e);
  }
}
// Llamamos a la función y usamos await para obtener el resultado
async function AllfillHeader() {
  let data = await obtenerDatos('http://127.0.0.1:3000/api/record');
  let i = data.length - 1;
  let last = data[i];

  for (let index = 0; index < 7; index++) {
    let flag = index - last.day;
    modificarTable("t1", 1, index, mostrarFecha(last.date, flag));
    actualizarIdWeek(currentWeek,data, i, index, flag);
  }

  let idDiaActual = idDiaActualCurrentWeek();
  let text = `${currentWeek.days[idDiaActual].text} : ${mostrarFecha(last.date, 0)}`
  cambiarFecha(text, last.id);

  // llenar la tabla 2 (ahora me encargo de la segunda tabla 2 )
  i = i - last.day - 1;
  last = data[i];
  for (let index = 0; index < 7; index++) {
    let flag = index - last.day;
    modificarTable("t2", 1, index, mostrarFecha(last.date, flag));
    actualizarIdWeek(pastWeek,data, i, index, flag);
  }
}