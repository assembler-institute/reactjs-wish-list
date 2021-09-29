import styled from "styled-components";

const FormAddTodoStyled = styled.section`
	padding: 0.75rem;

	border-radius: 0.25rem;
	box-shadow: ${({ theme }) => theme.shadow.default };
	background: ${({ theme }) => theme.background.color.default };
	color: ${({ theme }) => theme.text.color.default };

	transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	gap: 0.5rem;
`

export { Form, FormAddTodoStyled };