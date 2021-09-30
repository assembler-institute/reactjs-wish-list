import styled from "styled-components";
import image from "../../img/undraw_wandering_mind_0mkm.svg";

const NoTodosStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	height: 40vh;
	padding: 2rem;

	color: ${({ theme }) => theme.text.color.default };
`;

const Image = styled.img`
	width: 240px;
	content: url(${image});
`;

const Title = styled.h3`
	margin: 0;

	text-align: center;
	font-size: 1.5rem;
	font-weight: 400;
`;

export { NoTodosStyled, Image, Title };