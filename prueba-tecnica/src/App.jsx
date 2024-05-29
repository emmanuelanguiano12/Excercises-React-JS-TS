import { useEffect, useState } from "react";
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_IMAGE_PREFIX = 'https://cataas.com'

export function App() {
  const [fact, setFact] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
      });
  }, []); //No olvidar dependencias

  useEffect(() => {
    if (!fact) return; //Si no hay fact, no hacer nada
    const firstWord = fact.split(' ', 3).join(' ') //(mdn) separar por espacios para encontrar la primer palabra
    console.log(firstWord)

          fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
            .then(resp => resp.json())
            .then(response => {
              const { url } = response
              console.log(url)
              setImageUrl(url);
            });
  }, [fact])

  return (
    <main>
      <h1>App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl &&
        <img src={`${CAT_IMAGE_PREFIX}${imageUrl}`} alt={`Image using the first word of ${fact}`} />
      }
    </main>
  );
}
