const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: String,
});

const continentSchema = new mongoose.Schema({
  name: String,
});

const countrySchema = new mongoose.Schema({
  code: String,
  name: String,
  continent: continentSchema,
  capital: String,
  currency: String,
  languages: [languageSchema], // array por que hay varios idiomas en algunos
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;