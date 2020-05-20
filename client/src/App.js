import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Rockets from './components/Rockets';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={Launches} />
        <Route exact path='/' component={Rockets} />

        <Route exact path='/launch/:flight_number' component={Launch} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
