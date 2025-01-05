

// ejecutar esa tabla 
actualizarTabla();
// actualizar toda la tabla  (unir las dos tablas)



function actualizarTabla(){
    //actualizar la cabecera 
    fillHeader();
    var tbody = document.querySelector('.t2 tbody'); //IMPORTANTE 
    var filas = tbody.querySelectorAll('tr');    
    for (var i = filas.length - 1; i > 0; i--) {

      filas[i].remove();
    }

    // llenar el resto 
    obtenerYUsarDatos();
}
