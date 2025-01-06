
  async function siguienteRecord() {
        let id = idDiaActualCurrentWeek();
        if (currentWeek.days[id].totalHora != 0) {
            await  ActualizarDato('http://localhost:3000/api/record/', currentWeek.days[id].id, { "totalHours": currentWeek.days[id].totalHora });
          }
        let fecha = new Date(currentWeek.days[id].day);
        fecha.setDate(fecha.getDate() + 1);
        fecha = fecha.toISOString().split('T')[0];
        fecha=fecha.toString();
        id = id < 6 ? id + 1 : 0;
        console.log(fecha+'/'+id)
        // este es pare registrar
        await  registrarDatos('http://localhost:3000/api/record/', { "totalHours": 0, "date": fecha, "state": 0,"day": id });
}

// este es para detectar el button 
let buttonSiguiente = document.querySelector(".buttonSiguiente");
buttonSiguiente.addEventListener('click', function() {
    console.log("Botón siguiente ha sido clickeado!");
    //LACYLOAD
    siguienteRecord()
    .then(() => {
        actualizarTabla(); 
    })
    .catch(error => {
        console.error('Error durante siguienteRecord:', error);
    });
});