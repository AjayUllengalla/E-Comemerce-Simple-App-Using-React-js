import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {

  const{
    cart,
    addToCart,
    increaseQuantity,
    removeFromCart,
    decreaseQuantity
  } = useCart();
   const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  // const obj = {
  //   id: "1",
  //   title: "RC Monster Truck",
  //   category: "Monster Truck",
  //   description: "High power RC monster truck with oversized wheels.",
  //   price: 3499,
  //   rating: 4.6,
  //   image: "src/assets/rc monster truck.jpg",
  // };
  return (
    <>
      <section className="mt-3 mb-3">
        <div className="container">
          {cart.length === 0 &&<p>Your Cart is Empty</p> }
          {cart.map( obj =>(
          <div className="card card-body mt-2"> 
            {/* cart body */}
            <div className="row align-items-center">

              <div className="col-md-3">
                <img
                src={obj.image}
                style={{width:'100%',maxWidth:'200px', objectFit:'contain'}} />
              </div>

              {/* product details  */}
              <div className="col-md-4">
                <h4 className="card-title">{obj.title}</h4>
                <p className="text-muted mb-1">Category: {obj.category}</p>
                <div className="mb-2">
                  <span className="badge btn btn-warning rounded-2 text-dark"> ★ {obj.rating}</span>
                </div>
              </div>

              {/* Quantity */}
              <div className="col-md-2">
                <div className="form-label">
                  <p>Quantity</p>
                  <div className="d-flex gap-2 input-group input-group-sm">
                  <button className="btn btn-outline-secondary"
                  onClick={()=>decreaseQuantity(obj.id)} >-</button>
                  <p className="text-center">{obj.qty}</p>
                  <button className="btn btn-outline-secondary"
                  onClick={()=>increaseQuantity(obj.id)}>+</button>
                </div>
                </div>
                
              </div>

              {/* price  */}
              <div className="col-md-3 text-end">
                <div className="mb-3">
                  <h2 className="text-primary"> ₹{obj.price}</h2>
                </div>
                <div className="d-felx gap-3 justify-content-end">
                  <button className="btn btn-outline-danger btn-sm"
                  onClick={()=>removeFromCart(obj.id)}>Remove</button>
                  <button className="btn btn-outline-warning btn-sm">Move to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
          ) )}
          {/* Total Cart Value  */}
            <div className="mt-3">
              <div className="card">
                <div className="card-body">
                  {cart.length > 0 && (
                  <div className="row justify-content-end">
                    <div className="col-md-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal:</span>
                        <span>₹{subtotal}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Tax (5%):</span>
                        <span>₹{(subtotal *0.05).toLocaleString() }</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold">Total:</span>
                        <span className="fw-bold">₹{(subtotal *1.05).toFixed(2) }</span>
                      </div>
                      <div>
                        <button className=" btn btn-primary form-control">Proceed to Checkout</button>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>
            
        </div>
      </section>
    </>
  );
}
export default Cart;
