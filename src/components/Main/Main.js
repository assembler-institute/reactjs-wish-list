import styled from "styled-components";

const MainPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

function Main({ children, ...props }) {
  return <MainPage {...props}>{children}</MainPage>;
}

export default Main;
