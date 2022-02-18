import styled from "@emotion/styled"

const Bttn = styled.button`
  background: #E3D512;
  border-radius: 30px;
  text-align: center;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export function Button(props) {
  return (
    <Bttn onClick={props.fnc}>{props.children}</Bttn>
  )
}
