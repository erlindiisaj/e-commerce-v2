import './checkout-cart.styles.scss';
import { useContext } from 'react';
import { CheckoutItems } from '../../contexts/checkout-items.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CheckoutCart = () => {
  const navigate = useNavigate();
  const { items } = useContext(CheckoutItems);
  const clickhandler = () => {
    navigate('/checkout');
  };
  console.log(items);
  return (
    <div className='checkout-cart-container'>
      <div className='cart-items'>
        {items.length !== 0 ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className='no-items-txt'> No added items... </p>
        )}
      </div>
      <button onClick={clickhandler}>Go to checkout</button>
    </div>
  );
};

export default CheckoutCart;
