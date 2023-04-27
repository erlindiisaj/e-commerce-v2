import { createContext, useState } from 'react';
import { SHOP_DATA } from '../data';
import { useEffect } from 'react';

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase.utils';

export const ProductsContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  /*
  useEffect(() => {
    const response = () => {
      addCollectionAndDocuments('categories', SHOP_DATA);
      console.log('done');
    };
    response();
  }, []);

  */

  useEffect(() => {
    const dataUpdate = async () => {
      const getData = await getCategoriesAndDocuments();
      setProducts(getData);
      //console.log(getData);
    };
    dataUpdate();
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
