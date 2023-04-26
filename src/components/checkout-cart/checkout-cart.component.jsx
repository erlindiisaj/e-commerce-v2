import './checkout-cart.styles.scss';
import { useState } from 'react';

import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CheckoutCart = () => {
  const navigate = useNavigate();
  const clickhandler = () => {
    navigate('/checkout');
  };
  return (
    <div className='checkout-cart-container'>
      <div className='cart-items'>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <button onClick={clickhandler}>Go to checkout</button>
    </div>
  );
};

export default CheckoutCart;
