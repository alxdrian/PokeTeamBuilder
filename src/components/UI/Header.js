import styled from "@emotion/styled";

export const Header = styled.header`;
  display: flex;
  width: calc(100% - 60px);
  padding: 10px 30px;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    padding: 10px;
    width: calc(100% - 20px);
  }
`;