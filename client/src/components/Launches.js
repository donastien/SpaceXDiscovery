import React from 'react';
import gql from 'graphql-tag';
import { Query } from '@apollo/react-hooks';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
      <Query query={LAUNCHES_QUERY}></Query>
    </div>
  );
};

export default Launches;
