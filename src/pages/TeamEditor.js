import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Page, PageContent, PokeDex, PageSection, Container, ButtonContainer } from "../components/UI/Container";
import { PokeEntry } from "../components/PokeEntry";
import { IconButton } from "../components/UI/Button";
import { getAllPokemon } from "../services/pokemonFetch";
import { PokeTeam } from "../components/PokeTeam";
import Header from "../components/UI/Header";
import { PokeDescription } from "../components/PokeDescription";
import { setPokemons, setPokemonSelected } from "../redux/actions/pokemonActions";
import { addToTeam, saveTeam, deleteTeam, setSelectedTeam, setTeamName } from "../redux/actions/teamActions";
import { Input } from "../components/UI/Input";
import { useNavigate } from "react-router-dom";
import { ContentLarge } from "../components/UI/Text";
import { ArrowIconLeft, ArrowIconRight, SaveIcon } from "../components/UI/Icons";

function TeamEditor() {
  let navigate = useNavigate();
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
    pagination + 12 < 890 && setPagination(pagination + 12)
  }

  function handlePrev() {
    pagination > 0 && setPagination(pagination - 12)
  }

  function addPokemonToTeam(data) {
    const index = Object.keys(team).find(key => team[key] === "");
    if (index !==undefined) {
      dispatch(addToTeam(data, index))
    }
  }

  function saveChanges() {
    if (teamName === "") {
      alert("Please enter a team name");
      return;
    }
    if (previousTeamName !== "") {
      dispatch(deleteTeam(previousTeamName));
    }
    dispatch(saveTeam(teamName, team))
    dispatch(setPokemonSelected(""))
    dispatch(setTeamName(""))
    dispatch(setSelectedTeam({0: "",1: "",2: "",3: "",4: "",5: ""}))
    navigate("/");
  }

  return (
    <Page>
      <Header />
      <PageContent>
        <PageSection>
          <div>
          <PokeDescription pokemon={selectedPokemon} />
          <Container>
            <ButtonContainer>
              <ContentLarge>NAME:</ContentLarge>
              <Input type="text" name="teamName" value={teamName} onChange={e => dispatch(setTeamName(e.target.value))} placeholder={"team name"}></Input>
            </ButtonContainer>
            <IconButton onClick={saveChanges}><SaveIcon/></IconButton>
          </Container>
          <PokeTeam team={team} />
          </div>
        </PageSection>
        <PageSection>
          <div>
            <Container>
              <IconButton onClick={handlePrev}><ArrowIconLeft/></IconButton>
              <ContentLarge>SELECT POKÉMON</ContentLarge>
              <IconButton onClick={handleNext}><ArrowIconRight/></IconButton>
            </Container>
            <PokeDex>
            {pokemons.slice(pagination, pagination + 12).map(pokemon => (
              <PokeEntry
                key={pokemon.name}
                name={pokemon.name}
                addToTeam={addPokemonToTeam}
                team={team}
                />
            ))}
            </PokeDex>
          </div>
            
        </PageSection>
      </PageContent>
    </Page>
  )
}

export default TeamEditor;