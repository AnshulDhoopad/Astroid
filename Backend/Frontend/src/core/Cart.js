import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart, cartEmpty } from "./helper/cartHelper";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div className="row">
        <div className="d-flex flex-wrap justify-content-center">
          {products.map((product, index) => (
            <div key={index} className="col-3 mb-3 mt-3 d-flex flex-wrap">
              <Card
                key={index}
                product={product}
                removeFromCart={true}
                addtoCart={false}
                setReload={setReload}
                reload={reload}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };

  return (
    <Base title="Cart Page">
      <div className="jumbotron text-dark text-center">
        <h3 className="display-4">Cart Section</h3>
      </div>
      <div className="row text-center cart">
        <div>
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h3 className="cartglasseffect">No Products in Cart</h3>
          )}
        </div>
        <div className="text-center">
          <StripeCheckout products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
