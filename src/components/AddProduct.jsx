import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AddProduct({editToProduct, editId,setEditId}) {
    const[product,setProduct] = useState(
        {
            title:"",
            category: "",
            description: "",
            price: "",
            rating:"",
            // image: ""
        }
    )
    let formhandle=(e) =>{
        setProduct({...product,[e.target.name]:e.target.value})
        
    }
    useEffect(()=>{
        if(editToProduct){
            setProduct(editToProduct)
        }
    },[editToProduct])
 
    let handleForm = (e) =>{
        e.preventDefault();
        const url =editId ? `http://localhost:3000/products/${editId}`:"http://localhost:3000/products";
        const method = editId ? "PUT":"POST";
        fetch(url,{
            method,
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        }).then(()=>{
                setProduct({
                title:"",
                category:"",
                description:"",
                price:"",
                rating:""
            });
            setEditId(null)
        });
    };
   
    return(
        <>
        <section className="mt-4">
            <div className="container">
            <div className="">
                <div className="card">
                    <div className="p-4">
                        <div className="text-end">
                            <Link to="/admin" className="btn btn-primary mb-3">Close</Link>
                        </div>
                        <form className="form-control p-4" onSubmit={handleForm}>
                            <div>
                            <label className="col-form-label">Product Title</label>
                            <input
                            className="form-control"
                            type="text"
                            value={product.title}
                            onChange={formhandle}
                             name="title"
                             />
                            </div>
                            <div className="">
                            <label className="col-form-label"> category</label>
                            <input className="form-control"
                            type="text"
                            value={product. category}
                            onChange={formhandle}
                             name="category"/>
                            </div>
                            <div className="">
                                <label className="col-form-label">Description</label>
                                <input
                                className="form-control"
                                value={product.description}
                                name="description"
                                onChange={formhandle} />
                            </div>
                              <div className="">
                                <label className="col-form-label">Price</label>
                                <input
                                className="form-control"
                                value={product.price}
                                name="price"
                                onChange={formhandle} />
                            </div>
                              <div className="">
                                <label className="col-form-label">Rating</label>
                                <input
                                className="form-control"
                                value={product.rating}
                                name="rating"
                                onChange={formhandle} />
                            </div>
                            <div className="mt-2">
                            <button value="submit" type="submit"
                            className="btn btn-primary form-control">
                                {editId?"Update Product":"Add Product"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default AddProduct;