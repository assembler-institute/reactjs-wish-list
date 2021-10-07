import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 3rem;
  font-weight: 400;

  color: white;
`;

export { HeaderStyled, Title };