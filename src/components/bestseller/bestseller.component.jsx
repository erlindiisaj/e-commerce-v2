import './bestseller.styles.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductsPreview from '../products-preview/products-preview.component';

const BestSeller = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='bestseller-container'>
      <h2>Best Sellers</h2>
      {products.map((category) => {
        const { items, title } = category;
        return <ProductsPreview key={title} title={title} items={items} />;
      })}
    </div>
  );
};

export default BestSeller;
