import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import "../styles.css";
import { isFocusable } from "@testing-library/user-event/dist/utils";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    setCount(count + 1);
    addItemToCart(
      product,
      setTimeout(() => setRedirect(true), "1000")
    );
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button onClick={addToCart} className="btn addtocart border-0">
          Add to Cart --> ${cartPrice}
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <div>
          <span className="btn rounded btn-sm px-4 mb-3 border-0 price">${cartPrice}</span>
          <div>
          <button
            onClick={() => {
              removeItemFromCart(product._id);
              setReload(!reload);
            }}
            className="btn border-0 text-dark addtocart"
          >
            Remove from cart
            </button>
            </div>
        </div>
      )
    );
  };
  return (
    <div className="card text-dark border-0 new" style={{ width: "18rem" }}>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <h5 className="card-title lead">{cartTitle}</h5>
        <p className="card-text">{cartDescrption}</p>
        {/* <p className="btn rounded btn-sm px-4 border-0 price">Price ${cartPrice}</p> */}
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>

    //     <div className="card" style="width: 18rem;">
    //   <ImageHelper product={product} />
    //   <div className="card-body">
    //     <h5 className="card-title">{cartTitle}</h5>
    //     <p className="card-text">{cartDescrption}</p>
    //         <div className="btn btn-primary">{showAddToCart(addtoCart)}</div>
    //         <div className="btn btn-warning">{showRemoveFromCart(removeFromCart)}</div>
    //   </div>
    // </div>
  );
};

export default Card;
