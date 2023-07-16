import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "./../backend";
import { createOrder } from "./helper/orderHelper";

const StripeCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalAmount = () => {
    let amount = 0;
    products.map((product) => amount += product.price);
    return amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      products,
    };
    const headers = {
      contentType: "application/json",
    };
    return fetch(`${API}/stripepayment`, {
        method: "POST",
        headers,
        body: JSON.stringify(body)
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton
        stripeKey="pk_test_51LNF4aSIlm35GApsDhPeupW4iNyfqAXI4TsqJCwab9kwqxwEjXDUeAMpbQbzW33jvc9W1HFlYpSaWPCZ6Exxrrda00pUjfS7sy"
        token={makePayment}
        amount={getFinalAmount() * 100}
        name="Buy Tshirts"
        shippingAddress
        billingAddress
      >
        <button className="btn btn-lg addtocart border-0">Pay with Stripe --> ${getFinalAmount()}</button>
      </StripeCheckoutButton>
    ) : (
      <Link to="/signin">
        <button className="btn btn-lg addtocart border-0">SignIn first</button>
      </Link>
    );
  };


  return (
    <div className="d-flex justify-content-end stripebutton">
      {products.length > 0 ? showStripeButton() : <Link to="/">
        <button className="btn btn-lg addtocart border-0">Add something to cart</button>
      </Link>}
    </div>
  );
};

export default StripeCheckout;
