import React, {useState} from 'react';
import { useQuery} from '@apollo/client';


import GET_COUNTRIES from '../queries/countries.graphql';
import '../Country.css';

const Country = () => {
    const { data, error, loading } = useQuery(GET_COUNTRIES);
const [searchTerm, setSearchTerm] = useState('');
const [selectedContinent, setSelectedContinent] = useState('');

    

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error... ${error.message}</p>


    const filteredCountries = data.countries.filter((country) => {
        return (
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedContinent === '' || country.continent.name === selectedContinent)
        );
      });

    return (
        <div>
        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar por país..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        {/* Menú de filtrado por continente */}
        <select value={selectedContinent} onChange={(e) => setSelectedContinent(e.target.value)}>
          <option value="">Todos los continentes</option>
          {/* Agrega opciones para cada continente según tus datos */}
        </select>
  
        {/* Lista de países */}
      <div className="country-list">
        {filteredCountries.map((country) => (
          <div key={country.code} className="country-card">
            <img src={country.flag} alt={`Bandera de ${country.name}`} />
            <h2>{country.name}</h2>
            <p>Continente: {country.continent.name}</p>
            <p>Capital: {country.capital}</p>
            <p>Moneda: {country.currency}</p>
            <p>Idiomas: {country.languages.map((lang) => lang.name).join(', ')}</p>
            {/* Agrega otros detalles según tus datos */}
            </div>
          ))}
        </div>
      </div>
    );
};


export default Country;