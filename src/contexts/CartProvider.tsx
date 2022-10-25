import { createContext, useContext, useState } from "react";

export const CartContext = createContext({} as any);

export const CartProvider = ({ children }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <CartContext.Provider
      value={{
        closeModal,
        openModal,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
