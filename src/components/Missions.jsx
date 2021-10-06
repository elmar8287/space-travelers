import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import Mission from './Mission'; // import/extensions

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length > 0) {
      dispatch(fetchMissions());
    }
  }, []);

  return (
    <div>
      <ul>
        {missions.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}
      </ul>
    </div>
  );
};

export default Missions;
