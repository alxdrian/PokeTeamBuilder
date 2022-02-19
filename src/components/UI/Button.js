import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  gap: 5px;
  padding: 10px 20px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  color: #ffff;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  background: #539DDF;
  color: #ffff;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const IconButton = styled(Button)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  padding: 2px;

  @media (max-width: 768px) {
    height: 25px;
    width: 25px;
  }

  :hover {
    background-color: #f6f6f9a1;
    color: #539DDF;
  }
`;
