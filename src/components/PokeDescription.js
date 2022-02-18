import styled from "@emotion/styled";
import { Description, PokeImage, TypesList, Type } from "./PokeEntry";
import { Container } from "./UI/Container";
import { Title } from "./UI/Text";
import { colorTypes } from "../helpers/colorTypes";
import { IconTypes } from "./IconTypes";

export function PokeDescription ({pokemon}) {
  return (
    <DescriptionContainer>
        <Title>{pokemon.name ? pokemon.name : ""}</Title>
        <PokeImage>
            {pokemon.sprites && <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>}
        </PokeImage>
        <Description>
        <TypesList>
            {pokemon.types && pokemon.types.map(type => (
                <TypeIcon key={type.type.name} color={type.type.name}>
                   <IconTypes type={type.type.name}/>
                </TypeIcon>
            ))}
        </TypesList>
        </Description>
  </DescriptionContainer> 
  )
}

const DescriptionContainer = styled(Container)`
  max-width: 650px;
`;

const TypeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  background: ${props => props.color && colorTypes(props.color)};

  svg {
    height: 60%;
    width: 60%;
    object-fit: contain;
  }
`;