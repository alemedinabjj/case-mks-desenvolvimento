import * as S from "./styles";
import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartProvider";
import { useSelector, useDispatch } from "react-redux";
import { FormatPrice } from "../../utils/FormatPrice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RootState } from "../../storage";
import { decrement, increment, remove, finalizePurchase } from "../../storage/CartItems";
import { IDataProps } from "../../types/IDataProps";
import Image from "next/image";

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
      toast.error("Produto removido do carrinho!", {
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

  useEffect(() => {
    let value = 0;
    for (let i = 0; i < cart.length; i++) {
      value += Number(cart[i].price);
    }
    setFinalPrice(value);
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
            onClick={() => {
              closeModal();
            }}
          >
            <FiX />
          </button>
        </S.Header>
        <S.Content>
          {cart.length > 0 ? (
            cart.map((product: IDataProps) => (
              <S.Product key={product.id}>
                <S.ProductImage>
                  <Image src={product.photo} alt={product.name} width={46} height={57} objectFit="cover" />
                </S.ProductImage>
                <S.ProductInfo>
                  <h3>{product.name}</h3>
                  <span>{product.brand}</span>
                </S.ProductInfo>
                <S.ProductActions>
                  <button
                    type="button"
                    aria-label="Remover produto"
                    onClick={() => {
                      dispatch(decrement(product));
                    }}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    type="button"
                    aria-label="Adicionar produto"
                    onClick={() => {
                      dispatch(increment(product));
                    }}
                  >
                    +
                  </button>
                </S.ProductActions>
                <S.ProductPrice>
                  <span>{FormatPrice(Number(product.price))}</span>
                </S.ProductPrice>

                <S.ProductRemove
                  type="button"
                  aria-label="Remover produto"
                  onClick={() => {
                    handleRemove(product.id);
                  }}
                >
                  <FiX />
                </S.ProductRemove>
              </S.Product>
            ))
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
