import { GetStaticProps } from "next";
import { api } from "../services/api";
import Card from "../components/Card";
import * as S from "../styles/Home";

interface IProduct {
  products: {
    map(arg0: (product: any) => JSX.Element): unknown;
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
    updateAt: string;
    find: any;
  };
}

interface IPropsProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  updateAt: string;
}

const Home = ({ products }: IProduct) => {
  return (
    <S.Container>
      <S.HomeContainer>
        <Card products={products} />
      </S.HomeContainer>
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/products?page=1&rows=12&sortBy=name&orderBy=DESC");

  const products = data.products.map((product: IPropsProduct) => {
    return {
      id: product.id,
      name: product.name,
      brand: product.brand,
      description: product.description,
      price: product.price,
      photo: product.photo,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
