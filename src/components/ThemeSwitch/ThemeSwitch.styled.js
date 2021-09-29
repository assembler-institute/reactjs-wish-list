import styled from "styled-components";

const ThemeSwitchStyled = styled.button`
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
  height: 1.5rem;
  width: 1.5rem;
`;

export { ThemeSwitchStyled, Icon };