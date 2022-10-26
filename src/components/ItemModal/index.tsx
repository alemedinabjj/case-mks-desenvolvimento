import * as S from "./styles";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../storage/CartItems";
import { RootState } from "../../storage";
import { FormatPrice } from "../../utils/FormatPrice";
import { IDataProps } from "../../types/IDataProps";

interface IItemModalProps {
  product: IDataProps;
  handleRemove: (id: number) => void;
}

export const ItemModal = ({ product, handleRemove }: IItemModalProps) => {
  const cart = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();
  return (
    <S.Product key={product.id} className="product-enter">
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
          className="decrement"
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
          className="increment"
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
  );
};
