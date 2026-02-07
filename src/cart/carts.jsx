<section className="mt-4 mb-4">
        <div className="container">
          <h2 className="mb-4">Shopping Cart</h2>
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                {/* Product Image */}
                <div className="col-md-3">
                  <img 
                    src={obj.image} 
                    alt={obj.title}
                    style={{ width: '100%', maxWidth: '200px', objectFit: 'contain' }}
                    className="img-fluid rounded"
                  />
                </div>
                
                {/* Product Details */}
                <div className="col-md-4">
                  <h5 className="card-title">{obj.title}</h5>
                  <p className="text-muted mb-1">Category: {obj.category}</p>
                  <p className="card-text small text-muted">{obj.description}</p>
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark">★ {obj.rating}</span>
                  </div>
                </div>
                
                {/* Quantity Controls */}
                <div className="col-md-2">
                  <label className="form-label small">Quantity</label>
                  <div className="input-group input-group-sm">
                    <button className="btn btn-outline-secondary" type="button">-</button>
                    <input type="text" className="form-control text-center" value="1" readOnly style={{ maxWidth: '50px' }} />
                    <button className="btn btn-outline-secondary" type="button">+</button>
                  </div>
                </div>
                
                {/* Price & Actions */}
                <div className="col-md-3 text-end">
                  <h5 className="text-primary mb-3">₹{obj.price.toLocaleString()}</h5>
                  <div className="d-flex gap-2 justify-content-end">
                    <button className="btn btn-outline-danger btn-sm">Remove</button>
                    <button className="btn btn-primary btn-sm">Move to Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cart Summary */}
          <div className="card mt-4">
            <div className="card-body">
              <div className="row justify-content-end">
                <div className="col-md-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>₹{obj.price.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax (5%):</span>
                    <span>₹{(obj.price * 0.05).toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span className="fw-bold">Total:</span>
                    <span className="fw-bold">₹{(obj.price * 1.05).toLocaleString()}</span>
                  </div>
                  <button className="btn btn-success w-100">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>