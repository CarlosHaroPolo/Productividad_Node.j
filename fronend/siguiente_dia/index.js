

record_data = {
    "id": 1,
    "totalHours": 8,
    "date": "2025-01-02",
    "state": 0,
    "day": 4

}

function obtenerIdHoyCurrentWeek() {
    window.addEventListener('load', function () {
        let id = 0;
        for (let index = 6; index >= 0; index--) {
            if (currentWeek[index].id != null) {
                id = index;
                console.log(index)
                break;
            }
        }
        //ahora tengo la invormacion del ultimo registro
        console.log(currentWeek[id].day);
        // hay que editar el horastotales 
        //  ActualizarDato('http://localhost:3000/api/record/', currentWeek[id].id, { "totalHours": currentWeek[id].totalHora });

        // ahora pasate al siguiente dia 
       
      


        let fecha = new Date(currentWeek[id].day);
        fecha.setDate(fecha.getDate() + 1);
        fecha = fecha.toISOString().split('T')[0];
        fecha=fecha.toString();
        id = id + 1;
        if(id==8){
            id=1;
        }
        console.log(fecha+'/'+id)
       registrarDatos('http://localhost:3000/api/record/', { "totalHours": 0, "date": fecha, "state": 0,"day": id });
        //crear el nuevo registro 



    });
}
obtenerIdHoyCurrentWeek();