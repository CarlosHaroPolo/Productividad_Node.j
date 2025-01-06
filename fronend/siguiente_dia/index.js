
  async function siguienteRecord() {
        let id = 0;
        for (let index = 6; index >= 0; index--) {
            if (currentWeek[index].id != null) {
                id = index;
                console.log(index);
                break;
            }
        }
        //ahora tengo la invormacion del ultimo registro
        console.log(currentWeek);
        
        if (currentWeek[id].totalHora != 0) {
            await  ActualizarDato('http://localhost:3000/api/record/', currentWeek[id].id, { "totalHours": currentWeek[id].totalHora });
        
          }

        

        let fecha = new Date(currentWeek[id].day);
        fecha.setDate(fecha.getDate() + 1);
        fecha = fecha.toISOString().split('T')[0];
        fecha=fecha.toString();
        id = id < 6 ? id + 1 : 0;
        console.log(fecha+'/'+id)
        
                //crear el nuevo registro 
    await  registrarDatos('http://localhost:3000/api/record/', { "totalHours": 0, "date": fecha, "state": 0,"day": id });

 
}

let buttonSiguiente = document.querySelector(".buttonSiguiente");



buttonSiguiente.addEventListener('click', function() {
    console.log("Botón siguiente ha sido clickeado!");


    //FALTA ACTUALIZAR LA FECHA OJITO !!!
    siguienteRecord()
    .then(() => {
        actualizarTabla();  // Se ejecuta después de que siguienteRecord se complete
    })
    .catch(error => {
        console.error('Error durante siguienteRecord:', error);
    });

        console.log("Botón siguiente ha sido clickeado!");

 
});