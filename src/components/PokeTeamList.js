import styled from "@emotion/styled"
import { Container, TeamList } from "./UI/Container"
import { HeadingMedium } from "./UI/Text"
import { PokeTeam } from "./PokeTeam"
import { IconButton } from "./UI/Button"
import { EditIcon, TrashIcon } from "./UI/Icons"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setSelectedTeam, setTeamName } from "../redux/actions/teamActions"

export function PokeTeamList ({teams}) {
  const dispatch = useDispatch()

  return (
    <TeamList>
        {Object.keys(teams).map(key => (
          <Container key={`team-${key}`} >
            <HeadingMedium>{key}</HeadingMedium>
            <Link to="team-editor">
              <EditButton onClick={() => {
                dispatch(setSelectedTeam(teams[key]))
                dispatch(setTeamName(key))
              }}>
                <EditIcon/>
              </EditButton>
            </Link>
            <DeleteButton><TrashIcon/></DeleteButton>
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