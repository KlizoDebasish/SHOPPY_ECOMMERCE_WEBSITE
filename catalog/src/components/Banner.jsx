import React from "react";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div
        className="hero min-h-screen mt-5"
        style={{
          backgroundImage:
            "url(https://rare-gallery.com/uploads/posts/503583-Girl-Street.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold text-white">
              Welcome To shOOpy
            </h3>
            <p className="mb-5">
              where shopping meets simplicity! Our platform is designed to
              provide an unparalleled online shopping experience, making it easy
              and enjoyable to find exactly what you need. Whether you’re
              searching for the latest fashion trends, cutting-edge electronics,
              or unique home decor, shOOpy has it all.
            </p>
            <Link to="/products">
              <Button text="Something for You 💕" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
