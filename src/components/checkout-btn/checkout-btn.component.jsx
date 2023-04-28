import './checkout-btn.styles.scss';
import { ReactComponent as Checkout } from '../../assets/checkout-vec.svg';

const CheckoutBtn = () => {
  return (
    <span className='checkoutbtn-container'>
      <Checkout />
    </span>
  );
};

export default CheckoutBtn;
