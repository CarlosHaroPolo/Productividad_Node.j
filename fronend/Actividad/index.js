async function activityGet() {
    const datas = await obtenerDatos('http://localhost:3000/api/activities/'); // Aquí se obtiene la información de la API

    datas.sort((a, b) => {
        // Primero comparamos por 'idType'
        if (a.idType !== b.idType) {
            return a.idType - b.idType;
        }
        // Si 'idType' es igual, comparamos por 'activity'
        if (a.activity < b.activity) {
            return -1;
        }
        if (a.activity > b.activity) {
            return 1;
        }
        return 0;
    });

    console.log(datas);
    datas.forEach(data => {
        agregarSelect("selectACtivity", data.id, data.activity);

    });
}

function agregarSelect(clase, id, value) {
    const select = document.querySelector(`.${clase}`);
    let elementoOpcion = document.createElement('option');
    elementoOpcion.value = id;
    elementoOpcion.textContent = value;
    select.appendChild(elementoOpcion);
}


activityGet();

// el button para registrar 
let registrarACtividad = document.querySelector(".registrarACtividad");
registrarACtividad.addEventListener('click', function () {

    
    let idACtivity =0;
    let activityHours =0;
    // primero lee los valores que tines dentro de 
    const selectElement = document.querySelector(".selectACtivity");
    idACtivity= parseInt(selectElement.value);
    // sacar las horas de 
    const inputHours  = document.querySelector(".HoursActivity");
    activityHours=parseFloat(inputHours.value);

   console.log(`${idACtivity}/${activityHours}`)


   // encontrar el id del dia 
   let id = 0;
for (let index = 6; index >= 0; index--) {
    if (currentWeek[index].id != null) {
        id = index;
        console.log(index);
        break;
    }
}
// tengo todo el arreglo ver si no esta intentado agregar una actividad que ya esta registrada 

//revisar esta parte
 const DayActivityArray= currentWeek[id].ActivityArray;
 console.log(DayActivityArray);
  for (let index = 0; index < DayActivityArray.length; index++) {

    if(DayActivityArray[index].idActivity==idACtivity){

      console.log(DayActivityArray[index].idActivity);
      console.log("YA esta registrado!!!!");
    }
    
  }
 //  
});



// ahora necesito que cuando da el button clik quiero que se guarde el registro 

/* 
} */

