import './mainpage.styles.scss';

import { ReactComponent as BoxLogo } from '../../assets/box.svg';
import { ReactComponent as CheckoutLogo } from '../../assets/checkout.svg';
import { ReactComponent as ClothesLogo } from '../../assets/clothes.svg';
import { ReactComponent as TimeLogo } from '../../assets/time.svg';
import MainImg from '../../assets/firstpage-img.svg';

const MainPage = () => {
  return (
    <div className='mainpage-container'>
      <div className='firstpage-txt-container'>
        <div className='greeting-txt'>
          <h2>
            We are thrilled to have you here and we hope you'll have a wonderful
            shopping experience
          </h2>
          <p>
            Thank you for choosing our e-commerce website and happy shopping!
          </p>
        </div>
        <div className='services'>
          <div>
            <ClothesLogo />
            <p>Quality clothes.</p>
          </div>
          <div>
            <CheckoutLogo />
            <p>Secure purcheses.</p>
          </div>
          <div>
            <BoxLogo />
            <p>Package tracker.</p>
          </div>
          <div>
            <TimeLogo />
            <p>Fast devlivery services.</p>
          </div>
        </div>
      </div>
      <div className='firstpage-img'>
        <img src={MainImg} alt='' />
      </div>
    </div>
  );
};

export default MainPage;
