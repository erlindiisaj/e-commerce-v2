import { createContext, useEffect, useState } from 'react';

const addItem = (items, itemToAdd) => {
  const itemExist = items.find((item) => item.id === itemToAdd.id);

  if (itemExist) {
    return items.map((item) =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item }
    );
  }

  return [...items, { ...itemToAdd, quantity: 1 }];
};

const removeItem = (items, itemToRemove) => {
  const itemExist = items.find((item) => item.id === itemToRemove.id);
  console.log(itemExist.quantity);
  if (itemExist.quantity === 1) {
    return items.filter((item) => item.id !== itemToRemove.id);
  }

  return items.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : { ...item }
  );
};

const deleteItem = (items, itemToDelete) => {
  console.log(itemToDelete);
  return items.filter((item) => item.id !== itemToDelete.id);
};

export const CheckoutItems = createContext({
  items: [],
  itemCount: null,
  totalPrice: null,
  isOpen: null,
  showItemsList: () => {},
  addCheckoutItem: () => {},
  removeCheckoutItem: () => {},
  deleteCheckoutItem: () => {},
});

export const CheckoutItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const newItemCount = items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const newTotalPrice = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setItemCount(newItemCount);
    setTotalPrice(newTotalPrice);
  }, [items]);

  const showItemsList = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const addCheckoutItem = (item) => {
    const result = addItem(items, item);
    setItems(result);
  };

  const removeCheckoutItem = (item) => {
    const result = removeItem(items, item);
    setItems(result);
  };

  const deleteCheckoutItem = (item) => {
    const result = deleteItem(items, item);
    setItems(result);
  };

  const value = {
    items,
    itemCount,
    totalPrice,
    isOpen,
    addCheckoutItem,
    removeCheckoutItem,
    deleteCheckoutItem,
    showItemsList,
  };
  return (
    <CheckoutItems.Provider value={value}>{children}</CheckoutItems.Provider>
  );
};
