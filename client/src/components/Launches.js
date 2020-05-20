import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import ParticlesBg from 'particles-bg';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      rocket {
        rocket_name
      }
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
    <section className='missions text-center' id='missions'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 mx-auto'>
            <h1 className='display-4'>Missions</h1>

            <div class='tbl-header'>
              <table cellpadding='0' cellspacing='0' border='0'>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Mission</th>
                    <th>Rocket</th>
                    <th>Launch Date</th>
                    <th>Success</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className='tbl-content'>
              <table cellpadding='0' cellspacing='0' border='0'>
                <tbody>
                  {data.launches.map((launch) => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ParticlesBg type='cobweb' bg={true} />
    </section>
  );
};

export default Launches;
