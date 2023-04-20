import { Link } from 'react-router-dom';
import './products-preview.styles.scss';

import ItemCard from '../item-card/item-card.component';

const ProductsPreview = ({ title, items }) => {
  return (
    <div className='products-preview-container'>
      <Link to={`shop/${title}`} className='title'>
        {title}
      </Link>
      <section>
        {items
          .filter((_, idx) => idx < 3)
          .map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
      </section>
    </div>
  );
};

export default ProductsPreview;
