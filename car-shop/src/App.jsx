import Products from './components/Products'
import {products} from './mocks/products.json'


function App() {

  return (
    <div>
      <h1>hola</h1>
      <Products products={products} />
    </div>
  )
}

export default App
