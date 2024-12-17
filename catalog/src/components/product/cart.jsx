import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import Button from "../../shared/Button";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
  //   console.log(cartItems)

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl sm:text-2xl bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent font-bold p-2 text-center mb-5">
          shOOpy Cart
        </h2>
        {cartItems.length > 0 ? (
          <div className="overflow-x-auto">
            {/* Display in Table*/}
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100 bg-gradient-to-r from-red-200 to-purple-200">
                  <th className="py-2 px-4 text-left">Product Name</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-2 px-4 font-semibold text-teal-900 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
                      {item.title}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        className="text-blue-500 hover:font-bold mr-2 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent font-bold p-1"
                        onClick={() =>
                          item.quantity > 1
                            ? updateQuantity(item.id, item.quantity - 1)
                            : null
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="text-blue-500 hover:font-bold ml-2 bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent font-bold p-1"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td className="py-2 px-4 flex items-center">
                      ₹{item.price * item.quantity}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        className=" text-teal-900 font-semibold hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
                        onClick={() => removeFromCart(item.id, item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Total Quantity and Total Price */}
            <div className="flex justify-around items-center mt-5 font-semibold min-w-full text-teal-900 bg-gradient-to-r from-red-200 to-purple-200 border border-gray-300 rounded:md">
              <span className="text-md">
                Total Quantity:{" "}
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
              <span className="text-lg">
                Total Price: ₹
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}{" "}
                /-
              </span>
            </div>
            <div className="flex justify-center items-center min-h-36 mt-4">
              <Button
                text="Clear Cart"
                onClick={clearCart}
                className={"bg-gradient-to-r from-red-600 to-purple-700"}
              />
            </div>
          </div>
        ) : (
          <p className="text-xl sm:text-2xl font-bold p-2 text-center min-h-screen mt-24">
            Your cart is empty 🙄
          </p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
