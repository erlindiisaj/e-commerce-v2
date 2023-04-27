import './bestseller.styles.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductsPreview from '../products-preview/products-preview.component';

const BestSeller = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <div className='bestseller-container'>
      <h2>Best Sellers</h2>
      {Object.keys(products).map((category) => {
        const items = products[category];

        return (
          <ProductsPreview key={category} title={category} items={items} />
        );
      })}
    </div>
  );
};

export default BestSeller;
