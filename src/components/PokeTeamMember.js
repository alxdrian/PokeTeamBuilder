import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { PokeImage } from "./PokeEntry";
import { Card } from "./UI/Card";
import { ContentXSmall } from "./UI/Text";
import { colorTypes } from "../helpers/colorTypes";
import pokeball from "../assets/pokeball.png";
import { removeFromTeam } from "../redux/actions/teamActions";

export function PokeTeamMember ({pokemon, index}) {
  const dispatch = useDispatch();

  return (
    <>
      {pokemon !== "" ? 
        <MemberCard
          color={pokemon.types[0].type.name}
          onClick={() => dispatch(removeFromTeam(index))}
        >
          <ImageMember>
              <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
          </ImageMember>
            <ContentXSmall>{pokemon.name}</ContentXSmall>   
        </MemberCard> : 
        <DefaultCard>
            <img src={pokeball} alt="pokeball"/>
        </DefaultCard>
        }
    </>
  )
}

const MemberCard = styled(Card)`
  width: 100px;
  height: 80px;
  color: black;
  background: ${props => props.color && colorTypes(props.color)};
  text-align: center;
  gap: 5px;

  p {
    text-transform: upperCase;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    width: 90px;
    height: 70px;
    gap: 0;
  }
`;

const ImageMember = styled(PokeImage)`
  img {
    height: 100%;
    width: 80%;
  }
`;

const DefaultCard = styled(MemberCard)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f954;

  img {
    height: 80%;
    width: 80%;
    object-fit: contain;
  }
`;