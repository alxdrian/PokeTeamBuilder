import styled from "@emotion/styled"
import { Card } from "./UI/Card"

export function PokeTeamMember ({pokemon}) {
  return (
    <>
      <MemberCard />
    </>
  )
}

const MemberCard = styled(Card)`
  width: 50px;
  height: 50px;
  background: #f6f6f9a1;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
