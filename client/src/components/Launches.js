import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

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
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading)
    return (
      <div class='spinner-grow text-light' role='status'>
        <span class='sr-only'>Loading...</span>
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <h1 className='display-4 my-3'>Launches</h1>
      <MissionKey />
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </Fragment>
  );
};

export default Launches;
