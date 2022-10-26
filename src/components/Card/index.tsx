import * as S from "./styles";
import Image from "next/image";
import { FormatPrice } from "../../utils/FormatPrice";
import Head from "next/head";
import { increment } from "../../storage/CartItems";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface IProduct {
  products: {
    find: any;
    map(arg0: (product: any) => JSX.Element): unknown;
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
    updateAt: string;
  };
}

const Card = ({ products }: IProduct) => {
  const dispatch = useDispatch();

  const handleAddProduct = (id: number) => {
    const product = products.find((item: { id: number }) => item.id === id);
    if (product) {
      dispatch(increment(product));
      toast.success(`${product.name} adicionado ao carrinho!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Head>
        <title>MKS | Produtos</title>
      </Head>
      {products &&
        products.map((product) => (
          <S.CardContainer key={product.id}>
            <S.CardContent>
              <S.CardImage>
                <Image src={product.photo} alt={product.name} width={200} height={200} objectFit="cover" />
              </S.CardImage>
              <S.CardTitle>
                <h2>{product.name}</h2>
                <span>{FormatPrice(product.price)}</span>
              </S.CardTitle>
              <S.CardDescription>
                <p>{product.description}</p>
              </S.CardDescription>
            </S.CardContent>
            <S.CardButton onClick={() => handleAddProduct(product.id)} type="button" aria-label="Adicionar ao carrinho">
              <Image src="/comprar.svg" alt="comprar" width={15} height={15} />
              <span>Comprar</span>
            </S.CardButton>
          </S.CardContainer>
        ))}
    </>
  );
};

export default Card;
