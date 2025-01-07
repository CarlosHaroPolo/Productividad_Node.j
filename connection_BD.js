const mysql = require('mysql');

// Crear conexión a la base de datos
const connection = mysql.createConnection({
    host: '127.0.0.1', // El host de la base de datos
    port: 3306,
    user: 'root', // Tu usuario
    password: '', // Sin contraseña
    database: 'productividad' // Nombre de la base de datos
  });

// Conectar a la base de datos
connection.connect(error => {
  if (error) {
    return console.error('Error al conectar: ' + error.message);
  }
});
