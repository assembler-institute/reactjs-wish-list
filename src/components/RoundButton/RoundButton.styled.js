import styled from "styled-components";

const RoundButton = styled.button`
	appearance: none;
	cursor: pointer;
	user-select: none;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 2rem;
	height: 2rem;
	min-width: 2rem;
	
	border: none;
	outline: none;
	border-radius: 50%;

	box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
	background: white;
`;

export default RoundButton;