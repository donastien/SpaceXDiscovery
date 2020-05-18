import React, { Fragment } from 'react';
import Countdown from './Countdown';
import './layout.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';

const NEXTLAUNCH_QUERY = gql`
  query nextLaunchQuery {
    nextLaunch {
      mission_name
      launch_date_local
      launch_date_unix
      launch_date_utc
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

  const {
    mission_name,
    launch_date_local,
    launch_date_unix,
    launch_date_utc,
  } = data.nextLaunch;

  const momentDate = moment(launch_date_local).format('MM DD YYYY, h:mm a');

  return (
    <Fragment>
      <h1>Prochain Lancement : {mission_name}</h1>
      <Countdown timeTillDate={momentDate} timeFormat='MM DD YYYY, h:mm a' />
    </Fragment>
  );
};

export default Landing;
