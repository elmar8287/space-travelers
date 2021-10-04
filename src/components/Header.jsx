import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function header() {
  return (
    <div className="d-flex align-items-center justify-content-between border-bottom m-4">
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="logo"
          className="logo me-2"
          style={{
            display: 'inline-block',
            width: '3rem',
          }}
        />
        <div className="m-3">
          <h2>Space Travelers&apos; Hub</h2>
        </div>
      </div>
      <nav>
        <NavLink
          to="/rockets"
          className="px-3 fw-bold"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          className="px-3 fw-bold border-end border-dark"
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
          className="px-3 fw-bolder"
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default header;
