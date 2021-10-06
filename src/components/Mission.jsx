import { PropTypes } from 'prop-types';
import './Mission.css';

const Mission = ({ mission }) => (
  <li key={mission.id} className="list-unstyled">
    <div className="d-flex p-3 align-items-center">
      <div className="mission-description">
        <h2>{mission.mission_name}</h2>
        <p>{mission.description}</p>
        <button type="button" className="btn btn-primary">Reservation mission</button>
      </div>
    </div>
  </li>
);

export default Mission;

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf().isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
