import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Table, Container, Badge, Button,
} from 'react-bootstrap';
import { fetchMissions, toggleMissionState, missions } from '../redux/missions/missions';

export default function Missions() {
  const dispatch = useDispatch();
  const allMissions = useSelector(missions);
  useEffect(() => {
    dispatch(fetchMissions);
  }, [fetchMissions]);
  const joinOrLeaveMission = (e) => {
    dispatch(toggleMissionState({ mission_id: e.target.id }));
  };
  const missionComponents = allMissions.map((mission) => (
    <tr key={mission.mission_id}>
      <td><b>{mission.mission_name}</b></td>
      <td>{mission.description}</td>
      <td className="px-2 align-middle">
        {
          mission.reserved ? (
            <Badge className="bg-success">Active Member</Badge>
          ) : (
            <Badge className="bg-warning">NOT A MEMBER</Badge>
          )
        }
      </td>
      <td className="px-2 align-middle">
        {
          mission.reserved ? (
            <Button variant="outline-danger" id={mission.mission_id} onClick={joinOrLeaveMission}>Leave&nbsp;Mission</Button>
          ) : (
            <Button variant="outline-success" id={mission.mission_id} onClick={joinOrLeaveMission}>Join&nbsp;Mission</Button>
          )
        }
      </td>
    </tr>
  ));
  return (
    <Container fluid className="table-responsive-md">
      <Table className="table-bordered table-striped">
        <thead>
          <tr>
            <td><b>Mission</b></td>
            <td><b>Description</b></td>
            <td><b>Status</b></td>
          </tr>
        </thead>
        <tbody>
          {missionComponents}
        </tbody>
      </Table>
    </Container>
  );
}
