import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../storage";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = ({ openModal }: any) => {
  const cart = useSelector((state: RootState) => state.stock);
  return (
    <>
      <S.Button
        type="button"
        onClick={() => {
          openModal();
        }}
      >
        <AiOutlineShoppingCart size="1.3rem" />
        <span>{cart.length}</span>
      </S.Button>
    </>
  );
};

export default CartButton;
