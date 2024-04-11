import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    const toArray: any = [];
    toArray.push(result);
    setPokemonData(toArray);
  };

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return (
    <>
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
