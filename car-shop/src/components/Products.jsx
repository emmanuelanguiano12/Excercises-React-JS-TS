
import './Products.css'

export function Products ({products}) {
  return (
    <main className='products'>
        <ul>
            {
                products.map(product => {
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong>
                        </div>
                        <div>
                            <span>{product.description}</span>
                        </div>
                        <div>
                            <button>
                               
                            </button>
                        </div>
                    </li>
                })
            }
        </ul>
    </main>
  )
}
