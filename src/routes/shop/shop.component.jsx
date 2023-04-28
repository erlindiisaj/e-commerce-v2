import { Routes, Route } from 'react-router-dom';

import ShopNavbar from '../../components/shop-navbar/shop-navbar.component';
import Products from '../../components/products/products.component';

import './shop.styles.scss';
import Category from '../../components/category/category.component';

const Shop = () => {
  return (
    <Routes className='shop-container'>
      <Route path='/' element={<ShopNavbar />}>
        <Route index element={<Products />} />
        <Route path=':category' element={<Category />} />
      </Route>
    </Routes>
  );
};

export default Shop;
