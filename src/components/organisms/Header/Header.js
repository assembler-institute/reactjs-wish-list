import styled from "styled-components";

import { Toggle } from "../../../components/atoms";

const Title = styled.h1`
  color: white;
  letter-spacing: 3px;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 25px;
`;

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  max-width: 600px;
  box-shadow: none;
`;

function Header({
  changeTheme,
  theme
}) {
  return (
    <HeaderComponent>
      <Title>TO DO</Title>
      <Toggle changeTheme={changeTheme} theme={theme} />
    </HeaderComponent>
  );
}

export default Header;