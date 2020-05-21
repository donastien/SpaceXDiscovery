import React from 'react';
import Countdown from './Countdown';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import { Link } from 'react-router-dom';

// Requête pour récupérer les données sur prochain lancement.
const NEXTLAUNCH_QUERY = gql`
  query nextLaunchQuery {
    nextLaunch {
      mission_name
      launch_date_local
      flight_number
    }
  }
`;

const Landing = () => {
  const { loading, error, data } = useQuery(NEXTLAUNCH_QUERY);
  if (loading)
    return (
      <div class='spinner-grow text-light' role='status'>
        <span class='sr-only'>Loading...</span>
      </div>
    );
  if (error) return <p>Error :(</p>;

  const { mission_name, launch_date_local, flight_number } = data.nextLaunch;

  const momentDate = moment(launch_date_local).format('MM DD YYYY, h:mm a');

  return (
    <header className='masthead'>
      {' '}
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-lg-12 my-auto'>
            <div className='header-content mx-auto'>
              <h1 className='mb-4'>
                <h1 className='text-center'>
                  Prochain Lancement de la Mission{' '}
                </h1>
                <h1 className='text-center text-danger mb-4'>{mission_name}</h1>
                <Countdown
                  timeTillDate={momentDate}
                  timeFormat='MM DD YYYY, h:mm a'
                />
              </h1>
              <Link
                to={`/launch/${flight_number}`}
                className='btn btn-outline btn-xl js-scroll-trigger'
              >
                Détails de la mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
