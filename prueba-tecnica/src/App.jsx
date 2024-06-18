import { useEffect, useState } from "react";
import './App.css'
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";

const CAT_IMAGE_PREFIX = 'https://cataas.com'

const useCatFact = () => {
  const [fact, setFact] = useState('');

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, []); //No olvidar dependencias

  return {fact, refreshFact}
}

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({fact})

  const handleClick = async() => {
    refreshFact()
  }

  return (
    <main>
      <h1>App</h1>
      <button onClick={handleClick}>Get a new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl &&
        <img src={`${CAT_IMAGE_PREFIX}${imageUrl}`} alt={`Image using the first word of ${fact}`} />
      }
    </main>
  );
}
