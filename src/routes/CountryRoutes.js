const express = require('express');
const router = express.Router();
const countryController = require('../controllers/CountryController'); // Ruta de controllers

router.post('/countries', countryController.createCountry);
// Define otras rutas para leer, actualizar y eliminar países...

module.exports = router;