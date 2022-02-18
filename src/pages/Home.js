import { useState, useEffect } from "react";
import { Page, PageContent, Logo, PokeDex, PokemonTeam, PageSection } from "../components/UI/Container";
import { PokeEntry } from "../components/PokeEntry";
import { Button } from "../components/UI/Button";
import { getAllPokemon } from "../services/pokemonFetch";
import { PokeTeamMember } from "../components/PokeTeamMember";
import { Header } from "../components/UI/Header";
import pokeball from "../assets/pokeball.png";
import { PokeDescription } from "../components/PokeDescription";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [team, setTeam] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const names = await getAllPokemon();
      setPokemonData(names)
    }
    fetchData()
  }, []);

  function handleNext() {
    pagination + 20 < 890 && setPagination(pagination + 20)
  }

  function handlePrev() {
    pagination > 0 && setPagination(pagination - 20)
  }

  function addToTeam(data) {
    team.length <= 5 && setTeam([...team, data])
  }

  return (
    <Page>
      <Header>
        <Logo><img src={pokeball} alt={"logo"}/></Logo>
      </Header>
      <PageContent>
        <PageSection>
          <PokeDescription pokemon={selectedPokemon}>
          </PokeDescription>
          <PokemonTeam>
            {team.map(pokemon => (
              <PokeTeamMember pokemon={pokemon} key={pokemon.name} />
            ))}
            {team.length < 6 && Array(6 - team.length).fill("").map(
              (item, index) => <PokeTeamMember key={`default${index}`} />
            )}
          </PokemonTeam>
        </PageSection>
        <PageSection>
          <div>
            <Button onClick={handlePrev}>atras</Button>
            <Button onClick={handleNext}>siguiente</Button>
          </div>
          <PokeDex>
            {pokemonData.slice(pagination, pagination + 20).map(pokemon => (
              <PokeEntry
                key={pokemon.name}
                name={pokemon.name}
                addToTeam={addToTeam}
                team={team}
                setSelectedPokemon={setSelectedPokemon}
                />
            ))}
          </PokeDex>
        </PageSection>
        
      </PageContent>
      
    </Page>
  )
}

export default Home;