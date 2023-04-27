import './cart-item.styles.scss';

const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className='cart-items-container'>
      <img src={imageUrl} alt='img' />
      <div className='item-details'>
        <span className='item-details-name'>{name}</span>
        <span>{`${quantity} X ${price}`}</span>
      </div>
    </div>
  );
};

export default CartItem;
