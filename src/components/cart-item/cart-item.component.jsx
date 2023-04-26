import './cart-item.styles.scss';

const CartItem = () => {
  return (
    <div className='cart-items-container'>
      <img
        src='https://i.postimg.cc/wjx7D1js/ryan-hoffman-u6n1-Hr-W0sd-Q-unsplash.jpg'
        alt='img'
      />
      <div className='item-details'>
        <span className='item-details-name'>Black T-Shirt</span>
        <span>3 X $123</span>
      </div>
    </div>
  );
};

export default CartItem;
