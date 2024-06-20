import { useCart } from '../hooks/useCart.js'
import {AddToCartIcon, RemoveFromCartIcon} from './Icons.jsx'
import './Products.css'

export function Products({products}){
    const {addToCart, cart, removeToCart} = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    
    return(
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => {
                    const isProductInCart = checkProductInCart(product)
                return (
                    <li key={product.id}>
                        <img src="https://img.freepik.com/vector-gratis/conjunto-pegatinas-objetos-diarios-mixtos_1308-108542.jpg" alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button 
                            style={{backgroundColor : isProductInCart ? 'red' : 'blue'}}
                            onClick={() => isProductInCart 
                                ? removeToCart(product) 
                                : addToCart(product)}>
                                {
                                    isProductInCart
                                        ? <RemoveFromCartIcon/>
                                        : <AddToCartIcon />
                                }
                            </button>
                        </div>
                    </li>
                )})}
            </ul>
        </main>
    )
}