import './checkout-item.styles.scss';

const CheckoutItem = () => {
  return (
    <div className='product-to-buy'>
      <div />
      <p className='description'>Black T-Shirt</p>

      <span>
        <span className='edit-quantity-btn'>-</span>
        <span>2</span>
        <span className='edit-quantity-btn'>+</span>
      </span>
      <p>$150 </p>
      <span>X</span>
    </div>
  );
};

export default CheckoutItem;
