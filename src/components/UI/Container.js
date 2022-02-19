import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PageContent = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PageSection = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  background-color: #f6f6f954;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  justify-content: center;
`;

export const PokeDex = styled(Container)`
  justify-content: center;
`;

export const PokemonTeam = styled(Container)`
  justify-content: center;
  width: fit-content;
`;

export const TeamList = styled(Container)`
  flex-direction: column;
`;
