import * as S from "./styles";
import { useCart } from "../../contexts/CartProvider";
import dynamic from "next/dynamic";

export const Header = () => {
  const CartButtonWithNoSSR = dynamic(() => import("../CartButton"), {
    ssr: false,
  });
  const { openModal } = useCart();
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderContent>
          <div>
            <h1>MKS</h1>
            <span>Sistemas</span>
          </div>
          <CartButtonWithNoSSR openModal={openModal} />
        </S.HeaderContent>
      </S.HeaderContainer>
    </>
  );
};
