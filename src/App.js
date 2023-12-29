import { ApolloProvider } from '@apollo/client';
import React  from 'react';

import client from './client';
import Country from './components/Country';

function App() {
  return (
    <ApolloProvider client={client}>
    <Country/>
    </ApolloProvider>
  );    
}

export default App;

