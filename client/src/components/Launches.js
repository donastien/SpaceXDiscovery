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
    <section className='download bg-primary text-center' id='download'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 mx-auto'>
            <h1 className='display-4 my-3'>Missions</h1>

            <table className='table table-striped table-dark'>
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Mission Name</th>
                  <th scope='col'>Date</th>
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
