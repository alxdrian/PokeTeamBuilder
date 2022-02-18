import { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import { getAllPokemon, getPokemon } from "../services/pokemonFetch";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await getAllPokemon()
      const allData = []
      pokemon.map(async poke => {
        const data = await getPokemon(poke.name)
        return allData.push(data)
      })
      setPokemonData(allData)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Pokemon
        name="Bulbasaur"
        types={["grass", "fighting"]}
      />
    </div>
  )
}

export default Home;