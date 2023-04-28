import './navbar.styles.scss';

import { Link, Outlet } from 'react-router-dom';
import { useContext, Fragment } from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Checkout } from '../../assets/Chekcout-square.svg';
import { currentUserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase.utils';
import CheckoutCart from '../../components/checkout-cart/checkout-cart.component';
import { CheckoutItems } from '../../contexts/checkout-items.context';

const NavBar = () => {
  const { currentUser } = useContext(currentUserContext);
  const { itemCount, isOpen, showItemsList } = useContext(CheckoutItems);

  return (
    <Fragment>
      <div className='navbar-container'>
        <Link to='/'>
          <Logo className='logo-container' />
        </Link>
        <div className='navigation-links-container'>
          <Link to='/shop'>Shop</Link>
          {currentUser ? (
            <Link onClick={() => signOutUser()}>Sign Out</Link>
          ) : (
            <Link to='/authentication'>Sign In</Link>
          )}

          <Link to='/checkout' className='checkout-btn'>
            {itemCount === 0 ? null : (
              <span className='counter'>{itemCount}</span>
            )}
            {isOpen ? <CheckoutCart /> : null}
            <Checkout onClick={showItemsList} />
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
