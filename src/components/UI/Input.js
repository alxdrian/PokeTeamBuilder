import styled from "@emotion/styled"

export const Input = styled.input`
    height: 30px;
    background: #f6f6f987;
    border: none;
    border-bottom: 2px solid #539DDF;
    border-radius: 20px;
    padding: 0 10px;
    color: #539DDF;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

    &:focus {
      outline: none;
      background: #539DDF;
      color: #ffff;
      border-bottom: 2px solid #ffff;
    }
`;