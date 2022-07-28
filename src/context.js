import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [notEnoughPoint, setNotEnoughPoint] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isPopupOpen,
        notEnoughPoint,
        openPopup,
        closePopup,
        setNotEnoughPoint,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
