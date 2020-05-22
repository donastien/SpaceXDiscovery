import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({
  launch: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
    rocket: { rocket_name },
  },
}) => {
  return (
    <tr>
      <td>{flight_number}</td>

      <td>
        <Link to={`/launch/${flight_number}`}>{mission_name}</Link>
      </td>

      <td>{rocket_name}</td>
      <td>
        {' '}
        <Moment format='DD MMMM YYYY HH:mm'>{launch_date_local}</Moment>
      </td>
      <td
        className={classNames({
          'text-success': launch_success,
          'text-danger': !launch_success,
        })}
      >
        {launch_success ? 'Yes' : 'No'}
      </td>
    </tr>
  );
};

export default LaunchItem;
