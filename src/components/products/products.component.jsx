import { useContext } from 'react';

import ItemCard from '../item-card/item-card.component';
import { ProductsContext } from '../../contexts/products.context';

import './products.styles.scss';

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => {
        const { items } = product;
        return items.map((item) => <ItemCard key={item.id} item={item} />);
      })}
    </div>
  );
};

export default Products;
