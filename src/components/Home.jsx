import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner2.png";

function Home() {
  const navigate = useNavigate();

  function buyNowHandle() {
    navigate("/product");
  }
 
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let fetchProduct = () => {
      fetch("http://localhost:3000/products")
        .then((data) => data.json())
        .then((products) => setProduct(products));
    };
    fetchProduct();
  }, []);

   function handleClick() {
    navigate("/product")
  }
  console.log(product);

  return (
    <>
      <section className="mt-5">
        <div className="text-center landing-text">
           {/* <img src={banner} /> */}
          <div className="banner-image">
          
             <span className="badge text-bg-primary p-2">
            Welcome to ShoppingKart
          </span>
          </div>
        </div>
      </section> 
       {/* Banner Section */}
      <section className="">
        {/* ================= HERO SECTION ================= */}
      <section className="position-relative">
        <video autoPlay muted loop className="w-100 vh-100 object-fit-cover">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <span className="badge bg-danger mb-3 px-3 py-2">
            High Performance RC
          </span>
          <h1 className="fw-bold display-5">
            RC Cars & Bikes Store
          </h1>
          <p className="lead">
            Drift • Monster • Racing • Off-Road
          </p>
          <button
            className="btn btn-danger btn-lg mt-3"
            onClick={() => navigate("/product")}
          >
            Shop Now
          </button>
        </div>
      </section>

        {/* Overlay */}
        <div className="banner-overlay"></div>

        {/* Text Content */}
        <div className="banner-text">
          <span className="badge bg-danger mb-3 px-3 py-2">
            High Performance RC
          </span>

          <h1 className="fw-bold text-uppercase mb-3">RC Cars & Bikes Store</h1>

          <p className="lead mb-4">Drift • Monster • Off-Road • Racing</p>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-danger btn-lg" onClick={buyNowHandle}>
              Shop Now
            </button>
            <button className="btn btn-outline-light btn-lg">
              View Collection
            </button>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="category-title">Shop by Category</h2>
            <div className="title-divider"></div>
            <p className="text-muted category-subtitle">Explore our wide range of RC vehicles</p>
          </div>
          
          <div className="row g-4">
            {/* Drift Cars */}
            <div className="col-lg-3 col-md-6">
              <div className="category-card" onClick={() => navigate("/product")}>
                <div className="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.53 5.03a.5.5 0 0 1 .47.03l2 1.5a.5.5 0 0 1 .03.94l-2 1.5a.5.5 0 0 1-.47.03l-2-1.5a.5.5 0 0 1-.03-.94l2-1.5a.5.5 0 0 1 .47-.03z"/>
                    <path d="M14.5 13.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v13z"/>
                  </svg>
                </div>
                <h4 className="category-name">Drift Cars</h4>
                <p className="category-desc">High-speed drifting machines</p>
                <span className="category-link">Explore →</span>
              </div>
            </div>

            {/* Monster Trucks */}
            <div className="col-lg-3 col-md-6">
              <div className="category-card" onClick={() => navigate("/product")}>
                <div className="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H3a1 1 0 0 1-1-1v-3zm11 1H4v3h11v-3z"/>
                    <path d="M1 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8zm1 0v7h12V8H2z"/>
                  </svg>
                </div>
                <h4 className="category-name">Monster Trucks</h4>
                <p className="category-desc">Massive power & off-road</p>
                <span className="category-link">Explore →</span>
              </div>
            </div>

            {/* Racing Cars */}
            <div className="col-lg-3 col-md-6">
              <div className="category-card" onClick={() => navigate("/product")}>
                <div className="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM.5 13a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3h-15z"/>
                    <path d="M8 1a2 2 0 0 0-2 2v1H5a1 1 0 0 0-1 1h9a1 1 0 0 0 1-1H9V3a2 2 0 0 0-2-2H8z"/>
                  </svg>
                </div>
                <h4 className="category-name">Racing Cars</h4>
                <p className="category-desc">Speed & precision</p>
                <span className="category-link">Explore →</span>
              </div>
            </div>

            {/* Off-Road */}
            <div className="col-lg-3 col-md-6">
              <div className="category-card" onClick={() => navigate("/product")}>
                <div className="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm4 5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </div>
                <h4 className="category-name">Off-Road</h4>
                <p className="category-desc">Adventure awaits</p>
                <span className="category-link">Explore →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="mt-4">
       <section className="mt-5 rc-carousel-section">
  <div className="container">

    {/* Section Title */}
    <div className="text-center mb-4">
      <h3 className="rc-section-title">
        Featured Collection
      </h3>
      <div className="title-divider"></div>
      <p className="text-muted small mt-3">
        Drift • Racing • Off-Road
      </p>
    </div>

    {/* Carousel */}
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade rc-carousel"
      data-bs-ride="carousel"
      data-bs-interval="2800"
      data-bs-pause="hover"
    >
      <div className="carousel-inner">

        {product.map((productsData, index) => (
          <div
            key={productsData.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="rc-slide">

              {/* Image */}
              <img
                src={productsData.image}
                className="d-block w-100 rc-carousel-img"
                alt={productsData.title}
              />

              {/* Japanese Overlay */}
              <div className="rc-slide-overlay"></div>

              {/* Title */}
              <div className="rc-slide-text">
                <h2>{productsData.title}</h2>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>

    {/* CTA */}
    <div className="text-center mt-4">
      <button className="btn btn-danger px-4 py-2 rc-shop-btn" onClick={handleClick}>
        Shop Now
      </button>
    </div>

  </div>
</section>

      </section>
    </>
  );
}

export default Home;
