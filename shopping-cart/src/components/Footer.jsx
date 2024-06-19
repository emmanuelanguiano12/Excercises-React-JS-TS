import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
    const {filters} = useFilters()

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {
                // <footer className='footer'>
                //     <h4>Prueba técnica de React</h4>
                //     <span>Emmanuel Anguiano</span>
                //     <h5>Shopping Cart</h5>
                // </footer>
            }
        </footer>
        
    )
}