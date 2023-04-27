import './checkout.styles.scss';
import { useContext } from 'react';
import { CheckoutItems } from '../../contexts/checkout-items.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Payment from '../../components/payment/payment.component';

const Checkout = () => {
  const { items, totalPrice } = useContext(CheckoutItems);
  return (
    <div className='checkout-container'>
      <div className='shopping-card'>
        <div className='checkout-titles'>
          <p>Product</p>
          <p>Description</p>
          <p>Quantity</p>
          <p>Total Price</p>
          <span></span>
        </div>
        <div>
          {items.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </div>
        <div className='total-price-container'>
          <p>Total:</p>
          <p>{`$${totalPrice}`}</p>
        </div>
      </div>
      <Payment />
    </div>
  );
};

export default Checkout;
