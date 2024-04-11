import { useRef, useState } from "react";
import "./App.css";

function App() {
  /*   const [pokemon, setPokemon] = useState("pikachu");*/

  const [pokemonData, setPokemonData] = useState([]);

  const inputRef = useRef<HTMLInputElement | null>(null); // korrekt

  const getPokemon = async (pokemon: string) => {
    const toArray: any = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);

      toArray.push(result, ...pokemonData); // ...pokemonData sparar tidigare sökvärden
      setPokemonData(toArray);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    getPokemon(inputRef.current!.value); // med ! garanterar vi att den har ett värde
    console.log(inputRef.current!.value);
  };

  // Hämta specifik pokemon utan useEffect

  /*   useEffect(() => {
    getPokemon();
  }, [pokemon]); */

  // Hantera knappar och input
  return (
    <>
      <div className="flex flex-col">
        <input ref={inputRef} defaultValue={""}></input>{" "}
        {/* Det är bra att ha en ref på inputs för att minimera state-changes */}
        {/* Det går att använda onChange={} eventet istället för input event */}
        <br />
        <button onClick={() => handleClick()}>I choose you</button>
        {pokemonData.map((pokemon: any) => (
          <div key={pokemon.id}>
            <img src={pokemon.sprites.front_default}></img>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.types[0].type.name}</p>
            <div>
              {pokemon.stats.map((pokemon: any) => (
                <p>
                  {pokemon.stat.name}: {pokemon.base_stat}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
