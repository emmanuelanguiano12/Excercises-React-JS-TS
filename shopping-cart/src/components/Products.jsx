import {AddToCartIcon} from './Icons.jsx'
import './Products.css'

export function Products({products}){
    return(
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => (
                    <li key={product.id}>
                        <img src="https://img.freepik.com/vector-gratis/conjunto-pegatinas-objetos-diarios-mixtos_1308-108542.jpg" alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}