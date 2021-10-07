import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import { cancelReservation } from '../redux/rockets/rockets';
import { missions } from '../redux/missions/missions';

const Profile = () => (
  <div>
    Profile
  </div>
);

export default Profile;
