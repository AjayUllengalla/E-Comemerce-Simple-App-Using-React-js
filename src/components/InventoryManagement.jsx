import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";


function InventoryManagement({editToProduct}) {
    const[product,setProduct] = useState([]);
    const[editProduct,setEditProduct] = useState([])
    const[editId,setEditId] =useState(null)
 
        useEffect(() =>{
             let fetchProducts = () =>{
            fetch("http://localhost:3000/products")
            .then((res)=>res.json())
            .then((data)=>setProduct(data))
        }
       fetchProducts()
    },[])
    
   //edit handle
   const[edit,setEdit]=useState(false)
    const handleEdit =(product) =>{
       setEditProduct(product)
        setEditId(product.id)
        setEdit(true)
    };
    const handleDelete=()=>{

    }

    return(
        <>
       <section>
        <div className="mt-4">
            {edit&&(<AddProduct 
            editToProduct={editProduct}
            editId={editId}
            setEditId={setEditId}/>)}
            <div className="row">
                {product.map((productData)=>{
                    return(
                    <div className="col-md-3 mt-3">
                        <div className="card p-3">
                        <img src={productData.image} />
                        <h5>{productData.title}</h5>
                        <p>{productData.description}</p>
                        <ul>
                            <li>{productData.price}</li>
                            <li>{productData.category}</li>
                            <li>{productData.rating}</li>
                        </ul>
                         {/* <div className="row"> */}
                        <div className="d-flex text-center p-2 gap-2">
                            <div>
                                <button
                                 className="btn btn-primary"
                                onClick={()=>handleEdit(productData)}
                                >Edit </button>
                                </div>
                                <div>
                            <button className="btn btn-primary"
                            onClick={()=>handleDelete(product)}
                            >Delete</button>
                            </div>
                        </div>
                    {/* </div> */}
                    </div>
                   
                    </div>
                    )
                })}
            </div>
        </div>
       </section>
        </>
    )
}

export default InventoryManagement;