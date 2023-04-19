import './bestseller.styles.scss';

import { ReactComponent as Checkout } from '../../assets/Chekcout-square.svg';

const BestSeller = () => {
  return (
    <section className='bestseller-section'>
      <h2>Best Sellers</h2>
      <div className='category'>
        <p className='title'>T-Shirts</p>
        <div className='item-card'>
          <div className='card-img'></div>
          <div className='card-info'>
            <p className='name'>Stripe T-Shirt</p>
            <div className='price-container'>
              <div className='price'>
                <p className='price-p'>Price:</p>
                <p className='price-value'>$150</p>
              </div>
              <div>
                <Checkout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
