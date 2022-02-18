import styled from "@emotion/styled";
import pokedex from "../../assets/pokedex.jpg"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 5px;
  gap: 5px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 450px) {
    gap: 10px;
    padding: 10px;
  }
`;

export const PokeDex = styled(Container)`
  background-image: url(${pokedex});
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  justify-content: center;
`;

export const PokemonTeam = styled(Container)`
  background: #f6f6f9a1;
  justify-content: center;
`;