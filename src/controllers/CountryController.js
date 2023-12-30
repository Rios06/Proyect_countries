const Country = require('../models/CountryModel'); // Ruta de models

exports.createCountry = async (req, res) => {
  try {
    const newCountry = new Country(req.body);
    await newCountry.save();
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el país' });
  }
};

//otras funciones para leer, actualizar y eliminar países