const apiEndpoint = 'https://api.spacexdata.com/v3/missions';
const initialState = [];
const FETCH_MISSIONS = 'space-travellers/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'space-travellers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travellers/missions/LEAVE_MISSION';
const ADD_MISSION = 'missions/ADD_MISSION';
const fetchAllMissions = async () => {
  let res = await fetch(apiEndpoint);
  res = await res.json();
  return res;
};
const addMission = (mission) => ({
  type: ADD_MISSION,
  payload: mission,
});
export const fetchMissions = async (dispatch, getState) => {
  if (getState().missionsReducer.length > 0) return;
  const missions = await fetchAllMissions();
  missions.forEach((mission) => {
    const newMission = {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    };
    dispatch(addMission(newMission));
  });
  dispatch({
    type: FETCH_MISSIONS,
    payload: missions,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...action.payload];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};
export const missions = (state) => state.missionsReducer;
export default reducer;
