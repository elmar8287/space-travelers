import { PropTypes } from 'prop-types';
import './Mission.css';

const Mission = ({ mission }) => (
  <li key={mission.id}>
    <div>
      <div>
        <h2>{mission.mission_name}</h2>
        <p>{mission.description}</p>
        <span>Active Memmber</span>
        <button type="button">Join Mission</button>
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
