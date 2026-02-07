import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminDashBoard() {

    return(
        <>
        <section className="admin-card mt-4 mb-4">
            <div className="container">
                <div className="d-flex justify-content-center card  card-body">
                <div className="row text-center">
                    <div className="col-md-6 p-4">
                        <div>
                            <Link to="addproduct" className="btn btn-dark p-2">Add Product</Link>
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div>
                            <Link to = "inventory" className="btn btn-dark p-2">Manage Inventory</Link>
                        </div>
                    </div>
                    {/* <div className="col-md-4 p-4">
                        <div>
                            <button className="btn btn-dark p-2">Delete Products</button>
                        </div>
                    </div> */}
                </div>
                </div>
            </div>
            
            <Outlet />
        </section>

        </>
    )
}
export default AdminDashBoard;