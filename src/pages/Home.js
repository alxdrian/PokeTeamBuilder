import { useState, useEffect } from "react";
import { PokeDex, PokemonTeam } from "../components/UI/Container";
import { PokeEntry } from "../components/PokeEntry";
import { Button } from "../components/UI/Button";
import { getAllPokemon } from "../services/pokemonFetch";
import { PokeTeamMember } from "../components/PokeTeamMember";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const names = await getAllPokemon();
      setPokemonData(names)
      
    }
    fetchData()
  }, [])

  function handleNext() {
    pagination + 20 < 890 && setPagination(pagination + 20)
  }

  function handlePrev() {
    pagination > 0 && setPagination(pagination - 20)
  }

  return (
    <>
      <PokemonTeam>
        <PokeTeamMember></PokeTeamMember>
        <PokeTeamMember></PokeTeamMember>
        <PokeTeamMember></PokeTeamMember>
        <PokeTeamMember></PokeTeamMember>
        <PokeTeamMember></PokeTeamMember>
        <PokeTeamMember></PokeTeamMember>
      </PokemonTeam>
      <div>
        <Button fnc={handlePrev}>atras</Button>
        <Button fnc={handleNext}>siguiente</Button>
      </div>
      <PokeDex>
        {pokemonData.slice(pagination, pagination + 20).map(pokemon => (
          <PokeEntry
            key={pokemon.name}
            name={pokemon.name}
            />
        ))}
      </PokeDex>
    </>
  )
}

export default Home;