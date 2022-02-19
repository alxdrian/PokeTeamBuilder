import styled from "@emotion/styled"
import { Container, TeamList } from "./UI/Container"
import { HeadingMedium } from "./UI/Text"
import { PokeTeam } from "./PokeTeam"
import { IconButton } from "./UI/Button"
import { EditIcon, TrashIcon } from "./UI/Icons"
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
        <Link to="/team-editor">
          <Container onClick={createNewTeam}><HeadingMedium>CREATE NEW TEAM</HeadingMedium></Container>
        </Link>
        {Object.keys(teams).reverse().map(key => (
          <Container key={`team-${key}`} >
            <HeadingMedium>{key}</HeadingMedium>
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
            <PokeTeam team={teams[key]} />
          </Container>  
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