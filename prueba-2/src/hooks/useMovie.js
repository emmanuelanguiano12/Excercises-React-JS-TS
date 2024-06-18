import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovie ({search, sort}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef({search})

    const getMovies = useCallback( //en vez de usar useMemo, se usa useCallback para memorizar funciones
        async ({search}) => {
            if(search === previousSearch.current) return
            try {
                setLoading(true) //LOADING ANTES DE HACER EL FECTHING
                setError(null)
                previousSearch.current = search
                const newMovies = await searchMovies({search})
                setMovies(newMovies)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
    )

    /*  useCallback para funciones
        useMemo para valores
    */

    const sortMovies = useMemo(() => { //guarda un valor anterior y solo se ejecuta si algo cambia
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies]) 


    return { movies: sortMovies, getMovies, loading }
  }