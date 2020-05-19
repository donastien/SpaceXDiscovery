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
      <div className='spinner-grow text-light' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <section className='missions bg-primary text-center' id='missions'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 mx-auto'>
            <h1 className='display-4'>
              <i class='fas fa-rocket fa-w-20 fa-3x mb-4'></i>
            </h1>

            <table className='table table-striped table-dark rounded-lg'>
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Mission Name</th>
                  <th scope='col'>Date de lancement</th>
                  <th scope='col'>Success</th>
                </tr>
              </thead>
              <tbody>
                {data.launches.map((launch) => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launches;
