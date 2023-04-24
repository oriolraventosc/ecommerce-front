import ProductCard from "../../components/ProductCard/ProductCard";
import useUser from "../../hooks/useUser/useUser";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const products = useAppSelector((state) => state.userActions.productsList);
  const { getProducts } = useUser();
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <>
      <HomePageStyled aria-label="products list">
        {products.map((product, index) => (
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
            key={index}
            quantity={product.quantity}
          />
        ))}
      </HomePageStyled>
    </>
  );
};

export default HomePage;
