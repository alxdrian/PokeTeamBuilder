import styled from "@emotion/styled"
import { ButtonContainer, Container, TeamList } from "./UI/Container"
import { HeadingMedium } from "./UI/Text"
import { PokeTeam } from "./PokeTeam"
import { IconButton } from "./UI/Button"
import { EditIcon, PlusIcon, TrashIcon } from "./UI/Icons"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTeam, setPreviousTeamName, setSelectedTeam, setTeamName } from "../redux/actions/teamActions"
import { setPokemonSelected } from "../redux/actions/pokemonActions"

export function PokeTeamList ({teams}) {
  const dispatch = useDispatch()

  function createNewTeam () {
    dispatch(setPokemonSelected(""))
    dispatch(setTeamName(""))
    dispatch(setSelectedTeam({0: "",1: "",2: "",3: "",4: "",5: ""}))
    dispatch(setPreviousTeamName(""))
  }

  return (
    <TeamList>
        <Container>
            <HeadingMedium>TEAMS</HeadingMedium>
            <Link to="/team-editor">
                <IconButton onClick={createNewTeam}><PlusIcon /></IconButton>
            </Link>
        </Container>
        {Object.keys(teams).reverse().map(key => (
          <div key={`team-${key}`} >
            <Container>
                <HeadingMedium>{key}</HeadingMedium>
                <ButtonContainer>
                <Link to="team-editor">
                    <EditButton onClick={() => {
                        dispatch(setPokemonSelected(""))
                        dispatch(setSelectedTeam(teams[key]))
                        dispatch(setTeamName(key))
                        dispatch(setPreviousTeamName(key))
                    }}>
                        <EditIcon/>
                    </EditButton>
                </Link>
                <DeleteButton onClick={()=> dispatch(deleteTeam(key))}><TrashIcon/></DeleteButton>
                </ButtonContainer>
            </Container>
            <PokeTeam team={teams[key]} />
          </div>  
        ))}
    </TeamList>
  )
}

const EditButton = styled(IconButton)`
  position: static ;
`

const DeleteButton = styled(IconButton)`
  position: static ;
`