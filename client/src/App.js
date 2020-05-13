import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Launches from './components/Launches';
import './App.css';
import landingFont from './img/landingFont.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img
          src={landingFont}
          className='w-100 mx-auto d-block'
          alt='SpaceX Discovery'
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
};

export default App;
