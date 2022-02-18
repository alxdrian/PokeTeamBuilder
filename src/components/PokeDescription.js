import styled from "@emotion/styled";
import { Description, PokeImage, TypesList, Type } from "./PokeEntry";
import { Container } from "./UI/Container";
import { Title, ContentXSmall } from "./UI/Text";

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
                <Type key={type.type.name} color={type.type.name}>
                    <ContentXSmall>{type.type.name}</ContentXSmall>
                </Type>
            ))}
        </TypesList>
        </Description>
  </DescriptionContainer> 
  )
}

const DescriptionContainer = styled(Container)`
  max-width: 650px;
`;
