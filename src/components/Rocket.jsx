import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Rocket.css';
import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const makeReservation = (id) => {
    dispatch(reserveRocket(id));
  };

  const removeReservation = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <li key={rocket.id} className="d-flex list-unstyled m-2 p-1">
      <img
        src={rocket.flickr_images[0]}
        className="rocket-image"
        alt={rocket.rocket_name}
      />
      <div className="flex-grow-3 mx-4">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && (
            <Button disabled className="me-2" size="sm">
              Reserved
            </Button>
          )}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <Button
            variant="outline-secondary"
            onClick={() => removeReservation(rocket.id)}
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button variant="primary" onClick={() => makeReservation(rocket.id)}>
            Reserve Rocket
          </Button>
        )}
      </div>
    </li>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};
