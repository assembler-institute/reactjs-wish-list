import styled from "styled-components";

const ThemeSwitchStyled = styled.button`
  height: 2rem;
  width: 2rem;

  background: none;
  border: none;
  outline: none;

  border-radius: 50%;
  padding: 0.25rem;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.default}
  }
`;

const Icon = styled.img`
  display: block;
`;

export { ThemeSwitchStyled, Icon };