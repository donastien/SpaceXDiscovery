import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Launches from './components/Launches';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <h1 className='text-center display-4'>SpaceX Discovery</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
};

export default App;
