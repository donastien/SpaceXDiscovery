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
    details,
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
        className='modal fade'
        id={idModal}
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-dialog-centered modal-lg'
          role='document'
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLongTitle'>
                {mission_name}
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>

            <div className='modal-body'>
              <div className='container-fluid'>
                <div className='row'>
                  <div class='col-md-4'>Rocket : {rocket_name}</div>
                  <div class='col-md-4 ml-auto'>Type : {rocket_type}</div>
                </div>
                <div className='row'>
                  <div className='col-md-8 mt-5 mx-auto'>
                    {details ? details : 'No description'}
                  </div>
                </div>
                <div className='row'>
                  <div class='col-md-4 mt-5'>
                    Date :{' '}
                    <Moment format='DD MMMM YYYY HH:mm'>
                      {launch_date_local}
                    </Moment>
                  </div>
                  <div class='col-md-4 ml-auto mt-5'>Type : {rocket_type}</div>
                </div>
              </div>
            </div>
            <div className='modal-footer'></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LaunchItem;
