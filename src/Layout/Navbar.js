import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';


const Navbar = (props) => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faBone} /> Can My Pet Eat This?</a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
