import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import pokeball from "../../assets/pokeball.png";

function Header () {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo><img src={pokeball} alt={"logo"}/></Logo>
      </Link>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`;
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

const Logo = styled.div`
  height: 40px;
  width: 40px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export default Header;