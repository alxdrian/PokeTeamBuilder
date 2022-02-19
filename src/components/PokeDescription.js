import styled from "@emotion/styled";
import { ButtonContainer, Container } from "./UI/Container";
import { ContentRegular, HeadingMedium } from "./UI/Text";
import { colorTypes } from "../helpers/colorTypes";
import { IconTypes } from "./IconTypes";

export function PokeDescription ({pokemon}) {
  return (
    <>
    {pokemon === "" ? <Default>Select a POKÉMON</Default> : (
    <Container>
        <ImageContainer>
            {pokemon.sprites && <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>}
        </ImageContainer>
        <div>
            <TitleContainer>
                <HeadingMedium>{pokemon.name ? pokemon.name : ""}</HeadingMedium>
                <ButtonContainer>
                {pokemon.types && pokemon.types.map(type => (
                        <TypeIcon key={type.type.name} color={type.type.name}>
                        <IconTypes type={type.type.name}/>
                        </TypeIcon>
                    ))}
                </ButtonContainer>
            </TitleContainer>
            <StatsContainer>
                <StatList>
                    <Stat>
                        <StatName color={pokemon.types[0].type.name}>
                            <ContentRegular>HP</ContentRegular>
                        </StatName>
                        <div>{pokemon.stats[0].base_stat}</div>
                    </Stat>
                    <Stat>
                        <StatName color={pokemon.types[0].type.name}>
                            <ContentRegular>ATTACK</ContentRegular>
                        </StatName>
                        <div>{pokemon.stats[1].base_stat}</div>
                    </Stat>
                    <Stat>
                        <StatName color={pokemon.types[0].type.name}>
                            <ContentRegular>DEFENSE</ContentRegular>
                        </StatName>
                        <div>{pokemon.stats[2].base_stat}</div>
                    </Stat>
                </StatList>
                <StatList>
                    <Stat>
                        <StatName color={pokemon.types[1] ? pokemon.types[1].type.name : pokemon.types[0].type.name}>
                            <ContentRegular>SPEED</ContentRegular>
                        </StatName>
                        <div>{pokemon.stats[5].base_stat}</div>
                    </Stat>
                    <Stat>
                        <StatName color={pokemon.types[1] ? pokemon.types[1].type.name : pokemon.types[0].type.name}>
                            <ContentRegular>SP. ATK.</ContentRegular>
                        </StatName>
                        <div>{pokemon.stats[3].base_stat}</div>
                    </Stat>
                    <Stat>
                        <StatName color={pokemon.types[1] ? pokemon.types[1].type.name : pokemon.types[0].type.name}>
                            <ContentRegular>SP. DEF.</ContentRegular>
                        </StatName>
                        <div>{pokemon.stats[4].base_stat}</div>
                    </Stat>
                </StatList>
            </StatsContainer>
        </div>
  </Container> 
  )}
  </>
  )
}

const ImageContainer = styled.div`
  height: 130px;
  width: 130px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TypeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  background: ${props => props.color && colorTypes(props.color)};

  svg {
    height: 60%;
    width: 60%;
    object-fit: contain;
  }
`;

const Stat = styled.div`
  width: 150px;
  border-radius: 8px;
  background: #fff;
  display: flex;

  @media (max-width: 600px) {
    width: 100px;
  }

  div {
    text-align: center;
    width: 100%;
  }
`;

const StatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StatName = styled.div`
  color: #fff;
  background: ${props => props.color && colorTypes(props.color)};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px 0px 0px 8px;
  text-align: center;   
  width: 90px;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Default = styled(Container)`
  height: 150px;
`;