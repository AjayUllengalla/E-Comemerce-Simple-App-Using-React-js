import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Products() {
  const [product, setProduct] = useState([]);
  const {addToCart} = useCart()

  useEffect(() => {
    let fetchProducts = () => {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className="hero-section ">
        <div className="container  mt-5">
          <div className="row">
            {product.map((products) => {
              return (
                <>
                  <div className="col-md-3 mb-4 h-100 p-3" key={products.id}>
                    <div className="border-start">
                      <div
                        className="card h-100 shadow-sm product-card"
                        style={{ width: "18rem" }}
                      >
                        <img
                          src={products.image}
                          className="card-img-top border-bottom"
                          style={{
                            objectFit: "cover",
                            height: "180px",
                            width: "100%",
                          }}
                        />
                        <div className="card-body border border-top-0">
                          <h5 className="card-title">{products.title}</h5>
                          <p className="card-text">{products.description}</p>
                        </div>
                        <ul className=" list-group-flush">
                          <li className="list-group card-text text-success fw-bold">
                            ₹ {products.price}
                          </li>
                          <li className="list-group-item text-muted ">
                            {products.category}
                          </li>
                          <li className="list-group-item text-muted ">
                            Rating: ⭐{products.rating}
                          </li>
                        </ul>
                        <div className="d-flex gap-2">
                          <button className="btn btn-danger flex-grow-1"
                          onClick={()=>addToCart(products)}>
                            Add to Cart
                          </button>

                          <Link
                            to={`/product/${products.id}`}
                            className="btn btn-outline-dark btn-sm"
                          >
                            View
                          </Link>
                        </div>

                        {/* <div className="card-footer bg-white border-top-0 card-footer"></div> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
