import './item-card.styles.scss';
import { useContext } from 'react';
import { CheckoutItems } from '../../contexts/checkout-items.context';

import CheckoutBtn from '../checkout-btn/checkout-btn.component';

const ItemCard = ({ item }) => {
  const { imageUrl, price, name } = item;
  const { addCheckoutItem } = useContext(CheckoutItems);
  const myStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  const addItem = () => addCheckoutItem(item);

  return (
    <div className='item-card'>
      <div style={myStyle} className='card-img'></div>
      <div className='card-info'>
        <p>{name}</p>
        <div>
          <div>
            <p className='price-txt'>Price:</p>
            <p>${price}</p>
          </div>
          <span onClick={addItem}>
            <CheckoutBtn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
