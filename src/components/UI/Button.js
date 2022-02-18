import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  gap: 5px;
  padding: 5px 10px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  color: #ffff;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const IconButton = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  padding: 0;

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }

  :hover {
    background-color: #f6f6f9a1;
  }
`;
