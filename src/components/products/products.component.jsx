import { useContext } from 'react';

import ItemCard from '../item-card/item-card.component';
import { ProductsContext } from '../../contexts/products.context';

import './products.styles.scss';

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {Object.keys(products).map((product) => {
        const items = products[product];
        return items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        });
      })}
    </div>
  );
};

export default Products;
