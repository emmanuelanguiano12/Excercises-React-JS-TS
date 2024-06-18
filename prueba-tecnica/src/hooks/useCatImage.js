import { useEffect, useState } from "react";

export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState();
  
    useEffect(() => {
      if (!fact) return; //Si no hay fact, no hacer nada
      
      const firstWord = fact.split(' ', 3).join(' ') //(mdn) separar por espacios para encontrar la primer palabra
      console.log(firstWord)
  
      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          console.log(url)
          setImageUrl(url);
        });
    }, [fact])
  
    return {imageUrl}
  } //return imageURL