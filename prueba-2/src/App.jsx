import { useEffect, useState, useRef, useCallback } from 'react'
import { DNA } from 'react-loader-spinner'
import './App.css'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirtsInput = useRef(true)

  useEffect(() => {
    if (isFirtsInput.current) {
      isFirtsInput.current = search === ''
      return
    }

    if (search === ''){
      setError("Busqueda vacia")
      return
    }

    if(search.length < 3){
      setError("La busqueda debe tener al menos 3 caracteres")
      return
    }

    if(search.startsWith(' ')){
      setError("La busqueda no puede iniciar con espacios")
      return
    }
     
    setError(null)

  }, [search])
  return { search, updateSearch, error }

}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovie({search, sort})

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
    //const {query} = Object.fromEntries(new window.FormData(event.target))/*Object.fromEntries() para recuperar muchos*/
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const debouncerGetMovies = useCallback(() =>{
    debounce(search => {
      getMovies({search})
    }, 500)
  }, [])

  const handleChangue = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncerGetMovies( newSearch )
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChangue} value={search} name='query' placeholder='Avengers, Jumanji, Star Wars...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          />  : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
