import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";


const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const[cart,setCart]=useState([]);

    const addToCart =(product)=>{
        const existing = cart.find(item => item.id === product.id);

        if(existing) {
            setCart(
                cart.map(item =>
                    item.id === product.id ? {...item,qty:item.qty+1}
                    :item
                )
            );
            toast.error("Increased Quantity")
        } else {
            setCart([...cart,{...product,qty:1}])
            toast.success("Added to cart ✅");
        }
    };

    const removeFromCart =(id)=>{
        setCart(cart.filter(item => item.id !== id));
        toast.warning("Item Removed From  Cart")
    }
    const increaseQuantity =(id)=>{
        setCart(cart.map(item =>
            item.id === id ? {...item,qty:item.qty+1}
            : item
        ))
    };
    const decreaseQuantity =(id)=>{
        setCart(cart.map(item =>
            item.id === id && item.qty > 1 ? {...item,qty:item.qty - 1}:item
        ))
    };

    return(
        <CartContext.Provider
        value={{cart,addToCart,increaseQuantity,removeFromCart,decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);