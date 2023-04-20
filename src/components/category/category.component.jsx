import { ProductsContext } from '../../contexts/products.context';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../item-card/item-card.component';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [productsToShow, setProductsToShow] = useState(products[category]);

  useEffect(() => {
    setProductsToShow(products.filter((items) => items.title === category));
  }, [category, products]);

  return (
    <div className='category-container'>
      {productsToShow &&
        productsToShow[0].items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Category;
