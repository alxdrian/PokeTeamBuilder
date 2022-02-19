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

export const Logo = styled.div`
  height: 40px;
  width: 40px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 5px;
  gap: 5px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    gap: 10px;
    padding: 20px;
  }
`;

export const PokeDex = styled(Container)`
  background-color: #f6f6f954;
  justify-content: center;
`;

export const PokemonTeam = styled(Container)`
  background: #f6f6f954;
  justify-content: center;
  width: fit-content;
`;