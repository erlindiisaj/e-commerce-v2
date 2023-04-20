import { Link, Outlet } from 'react-router-dom';
import './shop-navbar.styles.scss';

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

const ShopNavbar = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='shop-navbar'>
      <div className='shop-navbar-categories'>
        <h2>Category</h2>
        <Link to='/shop'>ALL CATEGORIES</Link>
        {products.map((product) => (
          <Link key={product.title} to={product.title}>
            {product.title.toUpperCase()}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ShopNavbar;
