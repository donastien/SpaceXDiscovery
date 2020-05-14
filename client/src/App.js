import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import landingFont from './img/landingFont.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <img
            src={landingFont}
            className='w-100 mx-auto d-block'
            alt='SpaceX Discovery'
          />
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
