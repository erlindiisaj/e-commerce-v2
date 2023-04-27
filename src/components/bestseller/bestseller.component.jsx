import { BestSellerHeader } from './bestseller.styles';
import { useContext, Fragment } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductsPreview from '../products-preview/products-preview.component';

const BestSeller = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      <BestSellerHeader>Best Sellers</BestSellerHeader>
      {Object.keys(products).map((category) => {
        const items = products[category];
        return (
          <ProductsPreview key={category} title={category} items={items} />
        );
      })}
    </Fragment>
  );
};

export default BestSeller;
