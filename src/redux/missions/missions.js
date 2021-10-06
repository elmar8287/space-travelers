const baseAPI = 'https://api.spacexdata.com/v3/';
const FETCH_MISSIONS = 'space-travellers/missions/FETCH_MISSIONS';

const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  const fetched = await fetch(`${baseAPI}missions`);
  const list = await fetched.json();
  const missions = [];
  list.map((mission) => missions.push({
    id: mission.id,
    mission_name: mission.rocket_name,
    description: mission.description,
  }));

  dispatch({
    type: FETCH_MISSIONS,
    payload: missions,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS: return [...action.payload];
    default:
      return state;
  }
};

export const missions = (state) => state.missionsReducer;
export default reducer;
