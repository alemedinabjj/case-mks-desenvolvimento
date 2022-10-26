import * as S from "./styles";
import { FiX } from "react-icons/fi";
import { useEffect, useState, useMemo } from "react";
import { useCart } from "../../contexts/CartProvider";
import { useSelector, useDispatch } from "react-redux";
import { FormatPrice } from "../../utils/FormatPrice";
import { ItemModal } from "../ItemModal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RootState } from "../../storage";
import { remove, finalizePurchase } from "../../storage/CartItems";
import { IDataProps } from "../../types/IDataProps";

import { BsFillCartXFill } from "react-icons/bs";

const CartModal = () => {
  const { closeModal, modalOpen, setModalOpen } = useCart();
  const cart = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();
  const [finalPrice, setFinalPrice] = useState<number>(0);

  const handleFinalizePurchase = () => {
    if (cart.length > 0) {
      dispatch(finalizePurchase());
      setModalOpen(false);
      toast.success("Compra finalizada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleRemove = (id: any) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      dispatch(remove(product));
      toast.error(`${product.name} removido do carrinho!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useMemo(() => {
    const value = cart.reduce((acc, item) => {
      return acc + Number(item.price);
    }, 0);

    setFinalPrice(value);

    return value;
  }, [cart]);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <S.Container className={modalOpen ? "cart-modal-container--open" : "cart-modal-container"}>
      <S.Wrapper>
        <S.Header>
          <h2>
            Carrinho <br /> de compras
          </h2>
          <button
            type="button"
            aria-label="Fechar carrinho"
            onClick={() => {
              closeModal();
            }}
          >
            <FiX />
          </button>
        </S.Header>
        <S.Content>
          {cart.length > 0 ? (
            cart.map((product: IDataProps) => <ItemModal key={product.id} product={product} handleRemove={handleRemove} />)
          ) : (
            <S.EmptyCart>
              <h2>Seu carrinho está vazio</h2>
              <BsFillCartXFill size="3rem" />
            </S.EmptyCart>
          )}
        </S.Content>
      </S.Wrapper>
      <S.Footer>
        <div>
          <span>Total:</span>
          <strong>{FormatPrice(finalPrice)}</strong>
        </div>
        <S.Button type="button" onClick={handleFinalizePurchase} aria-label="Finalizar compra">
          Finalizar compra
        </S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default CartModal;
