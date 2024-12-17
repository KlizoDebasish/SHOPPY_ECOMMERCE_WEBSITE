import React, { useContext } from "react";
import Button from "../../shared/Button";
import { CartContext } from "../../context/CartProvider";

function ProductCards({ products }) {
  // console.log(products)

  const { addToCart } = useContext(CartContext);

  return (
    <>
      {products.map((product, index) => (
        <div
          key={index}
          className="card bg-gradient-to-r from-blue-400 to-purple-400 text-white w-full sm:w-80 h-auto shadow-xl"
        >
          <figure className="px-6 pt-6 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-xl w-32 h-40 object-cover cursor-pointer"
            />
          </figure>

          <div className="card-body flex flex-col items-center text-center p-4">
            <h2 className="card-title text-white text-lg font-bold mb-2">
              {product.title.slice(0, 15) +
                (product.title.length > 15 ? "..." : "")}
              <div className="badge ml-1 text-black text-sm font-normal cursor-pointer">
                {product.badge_text ? product.badge_text : "trending"}
              </div>
            </h2>

            <p className="text-gray-200 text-sm mb-4">{product.description}</p>

            <div className="card-actions justify-end px-2 py-1">
              <div className="badge badge-outline bg-blue-300 cursor-pointer text-xs">
                {product.vendor}
              </div>
              <div className="badge badge-outline text-black text-xs">
                ₹{product.price}
              </div>
            </div>

            <div className="card-actions mt-4 justify-center">
              <Button text="Add to Cart" onClick={() => addToCart(product)}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCards;
