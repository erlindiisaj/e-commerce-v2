import { useContext } from 'react';
import { CheckoutItems } from '../../contexts/checkout-items.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import {
  CheckoutCartContainer,
  CartItems,
  NoItemTxt,
  Button,
} from './checkout-cart.styles';

const CheckoutCart = () => {
  const navigate = useNavigate();
  const { items, showItemsList } = useContext(CheckoutItems);
  const clickhandler = (e) => {
    navigate('/checkout');
    showItemsList(e);
  };
  return (
    <CheckoutCartContainer>
      <CartItems>
        {items.length !== 0 ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <NoItemTxt> No added items... </NoItemTxt>
        )}
      </CartItems>
      <Button onClick={clickhandler}>Go to checkout</Button>
    </CheckoutCartContainer>
  );
};

export default CheckoutCart;
