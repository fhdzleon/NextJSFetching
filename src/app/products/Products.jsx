import CardProduct from "@/components/CardProduct/CardProduct";
import { fetchData } from "@/helpers/fetchData";

const Products = async () => {
  const fetcheddata = await fetchData("https://fakestoreapi.com/products");

  return (
    <div className="max-w-6xl grid-cols-3 gap-4 mx-auto text-white bg-black ">
      <h2 className="w-auto h-7">
        Estamos sobre `/products trabajando con Generación estatica - SSG
      </h2>
      <section className="grid grid-cols-3 gap-4 justify-evenly">
        {fetcheddata.map(({ id, title, image, price }) => {
          return (
            <CardProduct
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Products;
