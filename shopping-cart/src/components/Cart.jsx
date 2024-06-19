import './Carts.css'
import { useId } from 'react'
import { ClearCartIcon, RemoveFromCartIcon, CartIcon} from './Icons.jsx'

export function Cart(){
    const cartCheckboxId = useId()

    return(
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://www.telcel.com/medias/APPLEIPHONE132021PINKDUAL-515Wx515H.png?context=bWFzdGVyfGltYWdlc3wxMzg2NTF8aW1hZ2UvcG5nfGltYWdlcy9oYjkvaDdmLzg4OTc1MzMxMTY0NDYucG5nfDEyYzQzYjU3YWU5ODJhMzYxYmIxZTcxZTkyMTAzNGFkMWU2MTViYmQ2NTYwZDgxODJhODAzOTllMjBlY2JlNTQ" alt="iphone" />
                        <div>
                            <strong>Iphone</strong> - $10000
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                        </footer>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}