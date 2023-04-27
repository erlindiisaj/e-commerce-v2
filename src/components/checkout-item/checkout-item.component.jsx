import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CheckoutItems } from '../../contexts/checkout-items.context';

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { removeCheckoutItem, addCheckoutItem, deleteCheckoutItem } =
    useContext(CheckoutItems);
  const myStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className='product-to-buy'>
      <img src={imageUrl} alt='' />
      <p className='description'>{name}</p>

      <span>
        <span
          className='edit-quantity-btn'
          onClick={() => removeCheckoutItem(item)}
        >
          -
        </span>
        <span>{quantity}</span>
        <span
          className='edit-quantity-btn'
          onClick={() => addCheckoutItem(item)}
        >
          +
        </span>
      </span>
      <p>{price * quantity} </p>
      <span className='deleteBtn' onClick={() => deleteCheckoutItem(item)}>
        X
      </span>
    </div>
  );
};

export default CheckoutItem;
