import styled, { css } from "styled-components";

const TodoItemStyled = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	min-height: 8vh;
	padding: 1rem;

	border-radius: 0.25rem;

	box-shadow: ${({ theme }) => theme.shadow.todoItem.default};
	background: ${({ theme }) => theme.background.color.todoItem.default};	
	color: ${({ theme }) => theme.text.color.default};

	transition: background 0.25s ease-in-out, color 0.25s ease-in-out;

	${({ isDone }) => isDone && css`
		background: ${({ theme }) => theme.background.color.todoItem.isDone};
	`}
`;

const FieldButton = styled.button`
	width: 100%;
	padding: 0.5rem;

	cursor: pointer;
	user-select: none;
	
	text-align: left;

	border-radius: 0.25rem;
	border: none;
	outline: none;
	background: inherit;
	color: ${({ theme }) => theme.text.color.default};

	&:hover {
		box-shadow: ${({ theme }) => theme.shadow.fieldButton.hover};
	}

	${({ isDone }) => isDone && css`
		color: ${({ theme }) => theme.text.color.fieldButton.isDone};
		text-decoration: line-through;
	`}
`;

export { TodoItemStyled, FieldButton };
