import './payment.styles.scss';
import { ReactComponent as PayPal } from '../../assets/paypal.svg';
import { ReactComponent as Creditcard } from '../../assets/creditcard.svg';

const Payment = () => {
  return (
    <div className='payment'>
      <div className='payment-title'>
        <h2>Payment Info.</h2>
      </div>
      <div className='payment-method'>
        <p>Payment Method</p>
        <form>
          <div className='radio'>
            <label>
              <input type='radio' name='payment' value='paypal' />
              <PayPal />
              PayPal
            </label>
          </div>
          <div className='radio'>
            <label>
              <input type='radio' name='payment' value='creditcard' />
              <Creditcard />
              Credit Card
            </label>
          </div>
        </form>
      </div>
      <div className='credit-card-info'>
        <form>
          <div className='input-div'>
            <label>Name on Card:</label>
            <input placeholder='Type here...' type='text' />
          </div>
          <div className='input-div'>
            <label>Card Number:</label>
            <input placeholder='Type here...' type='tel' />
          </div>
          <div>
            <div className='input-div'>
              <label>Expiration Date:</label>
              <input placeholder='Type here...' type='text' />
            </div>
            <div className='input-div'>
              <label>CVV</label>
              <input placeholder='Type here...' type='password' />
            </div>
          </div>
        </form>
      </div>
      <div className='sub-btn'>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Payment;
