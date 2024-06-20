import { useReducer, createContext } from 'react';
import { cartReducer, CartInitialState } from '../reducers/cart';

//1 Crear contexto
export const cartContext = createContext();


//2 Crear provider
export function CartProvider({ children }){
    const [ state, dispatch ] = useReducer(cartReducer, CartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART', 
        payload: product
    })

    const removeToCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return (
        <cartContext.Provider value={{cart: state, addToCart, clearCart, removeToCart}}>
            {children}
        </cartContext.Provider>
    )
}