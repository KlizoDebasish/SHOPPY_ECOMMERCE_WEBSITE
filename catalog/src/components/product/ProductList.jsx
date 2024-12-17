import React, { useContext, useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

function ProductList() {
  const { cartItems } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  // console.log(products)

  //fetch data through API
  useEffect(() => {
    fetch(
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const allProducts = data.categories.flatMap(
          (category) => category.category_products
        );
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //search filter functionality
  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    applySort(filtered);
  };

  const applySort = (filtered) => {
    let sortedProducts = [...filtered];
    if (sortOption === "Low - High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "High - Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Popular") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setFilteredProducts(sortedProducts);
  };

  // Handle sort option change
  const handleSortChange = (option) => {
    setSortOption(option);
    applySort(filteredProducts);
  };

  return (
    <>
      <div className="flex flex-col items-center m-5 ">
        {/* search and button section */}
        <div className="form-control w-80 mb-4">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-auto focus:border-purple-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-ghost btn-circle ml-2"
              title="search"
              onClick={handleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                title="filter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li onClick={() => handleSortChange("Popular")}>
                  <a>Popular</a>
                </li>
                <li onClick={() => handleSortChange("Low - High")}>
                  <a>Low - High</a>
                </li>
                <li onClick={() => handleSortChange("High - Low")}>
                  <a>High - Low</a>
                </li>
              </ul>
            </div>
            <div
              className="indicator items-center m-0 md:ml-2 lg:ml-3" 
              title="cart"
            >
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item top-3  bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {cartItems.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* pass the products array into ProductCards component */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {filteredProducts.length > 0 ? (
            <ProductCards products={filteredProducts} />
          ) : (
            <p className="text-xl sm:text-2xl font-bold p-2 text-center min-h-screen mt-24">Product Not Found 😶</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
