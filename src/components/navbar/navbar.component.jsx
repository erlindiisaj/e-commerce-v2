import './navbar.styles.scss';

import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Checkout } from '../../assets/Chekcout-square.svg';
import { Fragment } from 'react';

const NavBar = () => {
  return (
    <Fragment>
      <section className='nav-section'>
        <Link to='/'>
          <Logo className='logo-container' />
        </Link>
        <div className='navigation-container'>
          <Link to='/shop'>Shop</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/checkout' className='checkout-btn'>
            <span className='counter'>3</span>
            <Checkout />
          </Link>
        </div>
      </section>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
