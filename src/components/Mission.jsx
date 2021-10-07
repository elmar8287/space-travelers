import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import './Mission.css';

const Missions = () => {
  const allMissions = useSelector();

  const missionComponents = allMissions.map((mission) => (
    <tr key={mission.mission_id}>
      <td><b>{mission.mission_name}</b></td>
      <td>{mission.description}</td>
      <td className="px-4 align-middle">
        <span className="bg-secondary">NOT A MEMBER</span>
      </td>
      <td className="px-4 align-middle">
        <button type="button">Join&nbsp;Mission</button>
      </td>
    </tr>
  ));
  return (
    <container fluid>
      <table className="my-3 table-bordered table-striped">
        <thead>
          <tr>
            <td><b>Mission</b></td>
            <td><b>Description</b></td>
            <td><b>Status</b></td>
            <td />
          </tr>
        </thead>
        <tbody>
          {missionComponents}
        </tbody>
      </table>
    </container>
  );
};

export default Missions;

Missions.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
