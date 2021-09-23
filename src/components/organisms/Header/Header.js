import styled from "styled-components";

import { Toggle } from "../../../components/atoms";

const Title = styled.h1`
  color: #2E2E2E;
  letter-spacing: 2px;
  font-size: 4rem;
  font-weight: bold;
`;

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 8rem;
  max-width: 600px;
  box-shadow: none;
  margin: 0 auto;
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