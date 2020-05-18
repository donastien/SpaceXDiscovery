import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  return (
    <tr>
      <th scope='row'>{flight_number}</th>
      <Link to={`/launch/${flight_number}`}>
        <td>{mission_name}</td>
      </Link>
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

    /*
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': launch_success,
                'text-danger': !launch_success,
              })}
            >
              {mission_name}
            </span>{' '}
          </h4>
          <p>
            Date:{' '}
            <Moment format='DD MMMM YYYY HH:mm'>{launch_date_local}</Moment>
          </p>
        </div>
        <div className='col-md-3'>
          <Link to={`/launch/${flight_number}`} className='btn btn-light'>
            Details
          </Link>
        </div>
      </div>
    </div>*/
  );
};

export default LaunchItem;
