import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);

  const inputRef = useRef<HTMLInputElement | null>(null); // korrekt

  const getPokemon = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);

      const toArray: any = [];
      toArray.push(result, ...pokemonData); // ...pokemonData sparar tidigare sökvärden
      setPokemonData(toArray);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setPokemon(inputRef.current!.value); // med ! garanterar vi att den har ett värde
  };

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return (
    <>
      <input ref={inputRef} defaultValue={"Pikachu"}></input>
      <br />
      <button onClick={() => handleClick()}>I choose you</button>
      {pokemonData.map((pokemon: any) => (
        <div key={pokemon.id}>
          <img src={pokemon.sprites.front_default}></img>
          <p>Name: {pokemon.name}</p>
        </div>
      ))}
    </>
  );
}

export default App;
