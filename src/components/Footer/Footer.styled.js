import styled from "styled-components";

const FooterStyled = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	padding: 1.25rem;
	font-size: 0.9rem;

	box-shadow: 0 0 4px rgba(0,0,0,0.25);
	border-radius: 0.25rem;
	color: ${({ theme }) => theme.text.color.default };

	transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
`;

const FooterButton = styled.button`
	color: inherit;
	background: none;
	border: none;
	outline: none;

	cursor: pointer;

	&:hover {
		color: #4094C0;
	}
`;

export { FooterStyled, FooterButton };