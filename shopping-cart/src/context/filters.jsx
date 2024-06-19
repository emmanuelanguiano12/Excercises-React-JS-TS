import { createContext, useState } from "react";

//1 Crear el contexto (este es el que se consume)
export const FilterContext = createContext()

//2 Crear provider (este nos provee acceso a los datos)
export function FilterProvider({children}){
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    })

    return(
        //siempre se debe de envolver la aplicación en el main con el contexto
        <FilterContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}