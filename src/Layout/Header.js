import { Fragment } from 'react';


const Header = (props) => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Pet Food</a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
