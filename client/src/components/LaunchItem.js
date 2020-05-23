import React, { Fragment } from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({
  launch: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
    rocket: { rocket_name, rocket_type },
  },
}) => {
  const idModal = 'modal' + flight_number.toString();

  return (
    <Fragment>
      <tr>
        <td>{flight_number}</td>

        <td>
          <button
            className='btn text-warning'
            data-toggle='modal'
            data-target={'#' + idModal}
          >
            {mission_name}
          </button>
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

      <div
        class='modal fade'
        id={idModal}
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div
          class='modal-dialog modal-dialog-centered modal-lg'
          role='document'
        >
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLongTitle'>
                {mission_name}
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <p>
                Date de lancement :{' '}
                <Moment format='DD MMMM YYYY HH:mm'>{launch_date_local}</Moment>
              </p>
              <p>{rocket_type}</p>
            </div>
            <div class='modal-footer'></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LaunchItem;
