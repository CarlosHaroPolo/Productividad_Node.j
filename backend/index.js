const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const typeRoutes = require('./routes/typeRoute');
const activityRoutes = require('./routes/activityRoute');

// Usar rutas
app.use('/api/types', typeRoutes);
app.use('/api/activities', activityRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
