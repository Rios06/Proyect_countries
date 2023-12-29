import { useQuery } from '@apollo/client';
import React, { Fragment } from 'react';

import GET_COUNTRIES from '../queries/countries.graphql';

const Country = () => {

    const { data, error, loading } = useQuery(GET_COUNTRIES);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error... ${error.message}</p>
    return (
        <Fragment>

            {data.countries.map((country) => (
                <div key={country.name}>
                <h2>{country.name}</h2>
                <p>Code: {country.code}</p>
                <p>Capital: {country.capital}</p>
                <p>Continent: {country.continent ? country.continent.name : 'N/A'}</p>
                <p>Currency: {country.currency}</p>
                <p>Languages: {country.languages ? country.languages.map(lang => lang.name).join(', ') : 'N/A'}</p>
            </div>
            ))}
        </Fragment>
    );
};


export default Country;