import { useContext } from 'react';
import { CheckoutItems } from '../../contexts/checkout-items.context';

import {
  EditQuantity,
  EditQuantityButtons,
  DeleteButton,
  ProductToBuy,
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { removeCheckoutItem, addCheckoutItem, deleteCheckoutItem } =
    useContext(CheckoutItems);

  return (
    <ProductToBuy>
      <img src={imageUrl} alt='' />
      <p>{name}</p>

      <EditQuantity>
        <EditQuantityButtons onClick={() => removeCheckoutItem(item)}>
          -
        </EditQuantityButtons>
        <span>{quantity}</span>
        <EditQuantityButtons onClick={() => addCheckoutItem(item)}>
          +
        </EditQuantityButtons>
      </EditQuantity>
      <p>{price * quantity} </p>
      <DeleteButton onClick={() => deleteCheckoutItem(item)}>X</DeleteButton>
    </ProductToBuy>
  );
};

export default CheckoutItem;
