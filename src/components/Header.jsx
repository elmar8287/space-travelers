import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

function header() {
  return (
    <div className="d-flex align-items-center">
      <img scr={logo} style={{display: 'inline-block'}}>
      <h2>Space Travellers&apos; Hub</h2>  
    </div>
  )
}

export default header;