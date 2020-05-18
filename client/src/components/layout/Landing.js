import React, { Fragment } from 'react';
import Countdown from './Countdown';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
    <header class='masthead'>
      {' '}
      <div class='container h-100'>
        <div class='row h-100'>
          <div class='col-lg-7 my-auto'>
            <div class='header-content mx-auto'>
              <h1 class='mb-5'>
                <h1>Prochain Lancement : </h1>
                <h1 className='text-warning'>{mission_name}</h1>
                <Countdown
                  timeTillDate={momentDate}
                  timeFormat='MM DD YYYY, h:mm a'
                />
              </h1>
              <Link
                to={`/launch/${flight_number}`}
                class='btn btn-outline btn-xl js-scroll-trigger'
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
