import styled, { css } from "styled-components";

const InputStyled = styled.input`
	appearance: none;
	
	width: 100%;
	padding: 0.5rem;

	border-radius: 0.25rem;
	border: none;
	outline: none;

	background: ${({ theme }) => theme.background.color.input.default};
	color: ${({ theme }) => theme.text.color.default};

	&::placeholder {
		color: ${({ theme }) => theme.text.color.placeholder.default};
	}

	&:focus, &:hover {
		box-shadow: ${({ theme }) => theme.shadow.input.hover};
	}

	${({ isWrong }) => isWrong && css`
		box-shadow: ${({ theme }) => theme.shadow.input.isWrong};
	`}
`;

export { InputStyled };