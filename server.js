const express = require('express');
const mongoose = require('mongoose');
const countryRoutes = require('./src/routes/CountryRoutes'); // Ajusta la ruta según tu estructura

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect('mongodb+srv://Paises:4910247Jr@cluster0.5ocwqrw.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas
app.use('/api', countryRoutes); // Ajusta la ruta según tu estructura

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});