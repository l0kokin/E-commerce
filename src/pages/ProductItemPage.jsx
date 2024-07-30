import { useContext, useEffect, useState } from "react";
import { CardContainer, SingleCard } from "../components/ProductCardStyles";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/context";
import Loader from "../components/Loader";
import { ButtonYellow } from "../components/CategoryListStyles";

function ProductItemPage() {
  const { id } = useParams();
  const { fetchProductById, loading, addToCart, deleteFromCart, cart } =
    useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const isInCart = cart.some((cartItem) => cartItem.id === Number(id));
  console.log(cart, id);

  useEffect(() => {
    const getProduct = async () => {
      const productData = await fetchProductById(id);
      setProduct(productData);
    };
    getProduct();
  }, [id, fetchProductById]);

  if (loading || !product) {
    return <Loader />;
  }

  return (
    <CardContainer>
      <SingleCard>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
        <span>${product.price}</span>
        {!isInCart ? (
          <ButtonYellow onClick={() => addToCart(product)}>
            Add to Cart
          </ButtonYellow>
        ) : (
          <ButtonYellow onClick={() => deleteFromCart(product)}>
            Delete from Cart
          </ButtonYellow>
        )}
      </SingleCard>
    </CardContainer>
  );
}

export default ProductItemPage;
