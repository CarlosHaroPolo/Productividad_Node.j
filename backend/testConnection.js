const sequelize = require('./database');

async function testConnection() {
  try {
    await sequelize.authenticate(); // encender la coneccionn 
    console.log('Conexión establecida exitosamente ESTA BIEN.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  } finally {
    await sequelize.close(); // Cierra la conexión
  }
}

testConnection();




