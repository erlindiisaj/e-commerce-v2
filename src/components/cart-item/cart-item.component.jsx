import { CartItemContainer, CartItemDetails } from './cart-item.styles';

const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt='img' />
      <CartItemDetails>
        <span>{name}</span>
        <span>{`${quantity} X ${price}`}</span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
