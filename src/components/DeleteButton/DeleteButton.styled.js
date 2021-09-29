import styled from "styled-components";
import RoundButton from "../RoundButton";

const DeleteButtonStyled = styled(RoundButton)`
	&:hover {
		background: ${({ theme }) => theme.background.color.roundButton.hover};
		color: rgba(255,255,255,0.75);
	}
`;

const Icon = styled.svg`
	display: block;
	height: 1rem;
	width: 1rem;

	${DeleteButtonStyled}:hover & {
		fill: #FFFFFF;
	}
`;

const DeleteButton = styled(DeleteButtonStyled)`
	&::before {
		content: '\u{2715}';
	}
`;

export { DeleteButtonStyled, Icon };
export default DeleteButton;