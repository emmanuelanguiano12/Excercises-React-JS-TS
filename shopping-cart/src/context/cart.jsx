import { createContext, useState } from "react";

//1 Crear contexto
export const cartContext = createContext();

//2 Crear provider
export function CartProvider({ children }){
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCart = cart.findIndex(item => item.id === product.id)

        if(productInCart){
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity += 1
            setCart(newCart)
        }
    }
    
    const clearCart = () => setCart([])

    return (
        <cartContext.Provider value={{cart, addToCart, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}