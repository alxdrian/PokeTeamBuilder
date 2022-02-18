import { useState, useEffect } from "react";
import { PokemonList } from "../components/Container";
import Pokemon from "../components/Pokemon";
import { Button } from "../components/UI/Button";
import { getAllPokemon} from "../services/pokemonFetch";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await getAllPokemon()
      setPokemonData(pokemons)
    }
    fetchData()
  }, [])

  function handleNext() {
    pagination + 20 < 900 && setPagination(pagination + 20)
  }

  function handlePrev() {
    pagination > 0 && setPagination(pagination - 20)
  }

  return (
    <>
      <div>
        <Button fnc={handlePrev}>atras</Button>
        <Button fnc={handleNext}>siguiente</Button>
        <div>{pagination}</div>
      </div>
      <PokemonList>
        {pokemonData.slice(pagination, pagination + 20).map(pokemon => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            />
        ))}
      </PokemonList>
    </>
  )
}

export default Home;