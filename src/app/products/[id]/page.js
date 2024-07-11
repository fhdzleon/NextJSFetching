import ProductDetail from "@/components/ProductDetail/ProductDetail";
import React from "react";
import { fetchDetailData } from "@/helpers/fetchDetailData";

/* const productDetailFetch = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}; */

const Product = async ({ params }) => {
  //* Aqui estamos haciendo destructuring de la respuesta de nuestra funcion productDetailFetch
  const { id, title, price, description, image } = await fetchDetailData(
    "https://fakestoreapi.com/products",
    params.id
  );

  return (
    <>
      <ProductDetail
        id={id}
        title={title}
        price={price}
        description={description}
        image={image}
      />
    </>
  );
};

export default Product;
