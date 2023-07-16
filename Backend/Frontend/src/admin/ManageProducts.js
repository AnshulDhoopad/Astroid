import React, { useState, useEffect } from "react";

import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getProducts, deleteProduct } from "./helper/adminapicall";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getProducts().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = productId => {
    deleteProduct(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base title="Welcome admin">
      <div className="jumbotron text-dark text-center mb-4">
        <h3 className="display-4">Manage Products</h3>
      </div>
      <div className="row allproducts">
        <div className="col-md-8 offset-md-2 new">
          <h2 className="text-center my-5"><span className="new px-5 py-2">Total {products.length} products</span></h2>

          {products.map((product, index) => {
            return (
              <div key={index} className="row text-center mb-4">
                <div className="col-4">
                  <h3 className="mt-3 productname">{product.name}</h3>
                </div>
                <div className="col-4 py-2">
                  <Link
                    className="btn border-0 hover"
                    to={`/admin/product/update/${product._id}`}
                  >
                    <h5 className="px-3 mt-1">Update</h5>
                  </Link>
                </div>
                <div className="col-4 py-2">
                  <button
                    onClick={() => {
                      deleteThisProduct(product._id);
                    }}
                    className="btn border-0 hover"
                  >
                    <h5 className="px-3 mt-1">Delete</h5>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Link className="btn signin-button offset-2 mt-3 pt-3" style={{ width: "20vw" }} to={`/admin/dashboard`}>
          Admin Home
      </Link>
      </div>
    </Base>
  );
};

export default ManageProducts;
