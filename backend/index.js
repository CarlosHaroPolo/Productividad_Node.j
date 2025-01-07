const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


// Middleware para parsear JSON
app.use(express.json());

// Habilita CORS para todos los orígenes
app.use(cors());

// Importar rutas
const typeRoutes = require('./routes/typeRoute');
const activityRoutes = require('./routes/activityRoute');
const recordRoutes = require('./routes/recordRoute');
const r_aRoute = require('./routes/r_aRoute');

// Usar rutas
app.use('/api/types', typeRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/record', recordRoutes);
app.use('/api/ra', r_aRoute);


// agregar los recursos estaticos 
app.use(express.static('public'));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
