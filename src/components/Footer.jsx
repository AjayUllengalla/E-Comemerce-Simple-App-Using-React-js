import React from "react";

function Footer() {
    return(
        <>
       <section className="footer-sec">
        <div className="container py-4">
            <div className="row gy-4">
                <div className="col-md-3">
                    <h5 className="footer-title">About RCX</h5>
                    <ul className="">
                        <p>At RCX Store, our mission is simple to fuel your passion for
              speed, precision, and control through premium RC cars inspired by
              Japanese motorsport culture.</p>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h6 className="fw-bold text-danger footer-heading">Useful Links</h6>
                    <ul className="footer-items">
                        <li>About RCX Kart</li>
                        <li>How to Shop on RCX KART</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>Log in</li>
                    </ul>
                </div>
                <div className="col-md-3">
                     <h6 className=" fw-bold text-danger footer-heading ">Customer Service</h6>
                    <ul className="footer-items">
                        <li>Payment Methods</li>
                        <li>Money-back guarantee</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>Terms and Conditions</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
                 <div className="col-md-3">
                     <h6 className="fw-bold text-danger footer-heading">My Account</h6>
                    <ul className="footer-items">
                        <li>Profile</li>
                        <li>View Cart</li>
                        <li>My Whishlist</li>
                        <li>Order Track</li>
                        <li>Help</li>
                      
                    </ul>
                </div>
            </div>
        </div>
       </section>
        </>
    )
}

export default Footer;