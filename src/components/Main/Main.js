import styled from "styled-components";

const MainPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
  min-width: 100vw;
`;

function Main({ children, ...props }) {
  return <MainPage {...props}>{children}</MainPage>;
}

export default Main;
