import { createContext, useState, useEffect } from 'react';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils';

export const currentUserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // console.log(currentUser);
  const value = { currentUser };
  return (
    <currentUserContext.Provider value={value}>
      {children}
    </currentUserContext.Provider>
  );
};
