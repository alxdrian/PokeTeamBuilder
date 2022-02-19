import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PageContent = styled.div`
  height: calc(100vh - 60px);
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PageSection = styled.div`
  display: flex;
  max-width: 700px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  background-color: #f6f6f954;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px);
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;