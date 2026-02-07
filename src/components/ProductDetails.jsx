import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
    <section className="mt-5 product-details-section">
    <div className="container ">
      <div className="card product-card mb-3 mx-auto p-3 mt-5" style={{ maxWidth: "540px" }}>
        <div className="row g-0 align-items-center">
          
          <div className="col-md-4 product-image-wrapper">
            <img
              src={product.image}
              className="img-fluid product-image"
              style={{ objectFit: "cover", height: "180px" }}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="badge bg-secondary">{product.category}</p>
              <p className="card-text">
                <span className="text-success fw-bold">
                  ₹ {product.price}
                </span>
              </p>
              <p className="card-text small text-muted">
                Rating: ⭐ {product.rating}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default ProductDetails;
