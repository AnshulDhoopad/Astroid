import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Welcome to asTroid">
      {/* <div className="imagefull">
        <div className="">
            <a href="#down"><button className="btn btn-primary">Check Tshirts </button></a>
        </div>
      </div> */}
      <div style={{minHeight:"100vh"}}>
        <div className="jumbotron text-dark text-center">
          <h3 className="display-4">Welcome to asTroid</h3>
        </div>
        <div className="row text-center">
          <div className="row">
            {products.map((product, index) => {
              return (
                <div key={index} className="col-3 mb-3 mt-3 d-flex flex-wrap">
                  <Card product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Base>
  );
}
