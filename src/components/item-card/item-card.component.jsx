import './item-card.styles.scss';

import { ReactComponent as Checkout } from '../../assets/Chekcout-square.svg';

const ItemCard = ({ item }) => {
  const { imageUrl, price, name } = item;
  const myStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  const addItem = () => {
    alert('Nuk punon ky buttoni');
  };

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
          <Checkout onClick={addItem} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
