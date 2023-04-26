import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Payment from '../../components/payment/payment.component';

const Checkout = () => {
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
          <CheckoutItem />
        </div>
        <div className='total-price-container'>
          <p>Total:</p>
          <p>$400</p>
        </div>
      </div>
      <Payment />
    </div>
  );
};

export default Checkout;
