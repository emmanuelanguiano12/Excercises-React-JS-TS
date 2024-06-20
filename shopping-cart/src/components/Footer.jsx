import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
    const {filters} = useFilters()
    const {cart} = useCart()

    return (

            <footer className='footer'>
                <h4>Prueba técnica de React</h4>
                <span>Emmanuel Anguiano</span>
                <h5>Shopping Cart</h5>
            </footer>
    )
}