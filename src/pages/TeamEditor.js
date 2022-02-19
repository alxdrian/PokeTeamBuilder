import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Page, PageContent, PokeDex, PageSection } from "../components/UI/Container";
import { PokeEntry } from "../components/PokeEntry";
import { Button } from "../components/UI/Button";
import { getAllPokemon } from "../services/pokemonFetch";
import { PokeTeam } from "../components/PokeTeam";
import Header from "../components/UI/Header";
import { PokeDescription } from "../components/PokeDescription";
import { setPokemons, setPokemonSelected } from "../redux/actions/pokemonActions";
import { addToTeam, saveTeam, deleteTeam, setSelectedTeam, setTeamName } from "../redux/actions/teamActions";
import { Input } from "../components/UI/Input";
import { Link } from "react-router-dom";

function TeamEditor() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const selectedPokemon = useSelector(state => state.pokemons.selectedPokemon);
  const team = useSelector(state => state.team.selectedTeam);
  const teamName = useSelector(state => state.team.teamName);
  const previousTeamName = useSelector(state => state.team.previousTeamName);

  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const names = await getAllPokemon();
      dispatch(setPokemons(names));
    }
    fetchData();
  }, []);

  function handleNext() {
    pagination + 20 < 890 && setPagination(pagination + 20)
  }

  function handlePrev() {
    pagination > 0 && setPagination(pagination - 20)
  }

  function addPokemonToTeam(data) {
    const index = Object.keys(team).find(key => team[key] === "");
    if (index !==undefined) {
      dispatch(addToTeam(data, index))
    }
  }

  function saveChanges() {
    if (previousTeamName !== "") {
      dispatch(deleteTeam(previousTeamName));
    }
    dispatch(saveTeam(teamName, team))
    dispatch(setPokemonSelected(""))
    dispatch(setTeamName(""))
    dispatch(setSelectedTeam({0: "",1: "",2: "",3: "",4: "",5: ""}))
  }

  return (
    <Page>
      <Header />
      <PageContent>
        <PageSection>
          <PokeDescription pokemon={selectedPokemon} />
          <PokeTeam team={team} />
          <Input type="text" name="teamName" value={teamName} onChange={e => dispatch(setTeamName(e.target.value))} placeholder={"team name"}></Input>
          <Link to="/">
            <Button onClick={saveChanges}>SAVE TEAM</Button>
          </Link>
        </PageSection>
        <PageSection>
          <div>
            <Button onClick={handlePrev}>atras</Button>
            <Button onClick={handleNext}>siguiente</Button>
          </div>
          <PokeDex>
            {pokemons.slice(pagination, pagination + 20).map(pokemon => (
              <PokeEntry
                key={pokemon.name}
                name={pokemon.name}
                addToTeam={addPokemonToTeam}
                team={team}
                />
            ))}
          </PokeDex>
        </PageSection>
      </PageContent>
    </Page>
  )
}

export default TeamEditor;