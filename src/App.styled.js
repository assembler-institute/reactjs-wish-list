import styled from "styled-components";

const AppMain = styled.main`
	background-image: url(${({ theme }) => theme.background.image});
	background-size: cover;	
	background-repeat: no-repeat;
	
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100vh;
	
	transition: background 0.25s ease-in-out;	
`;

const AppMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

  width: 100%;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }
`;

const AppContainer = styled.div`
  background: ${({ theme }) => theme.background.color.default}; 
  box-shadow: ${({ theme }) => theme.shadow.default}; 
	border-radius: 0.25rem;
	overflow: hidden;

	transition: background 0.25s ease-in-out;
`;

export {AppMain, AppMainWrapper, AppContainer};