import styled, { css } from "styled-components";
import RoundButton from "../RoundButton";

const CheckButtonStyled = styled(RoundButton)`
	color: transparent;

	&:hover {
		background: ${({ theme }) => theme.background.color.roundButton.hover};
		color: rgba(255,255,255,0.75);
	}

	&:active {
		background: ${({ theme }) => theme.background.color.roundButton.active};
		color: #FFFFFF;
	}

	${
		({ isEnabled }) => isEnabled && css`
			background: ${({ theme }) => theme.background.color.roundButton.active} !important;
			color: white !important;

			border: 1px solid green;
		`
	}
`;

const Icon = styled.svg`
	display: block;
	height: 1rem;
	width: 1rem;

	${CheckButtonStyled}:hover & {
		fill: #FFFFFF;
	}
`;

const CheckButton = styled(CheckButtonStyled)`
	&::before {
		content: '\u{2713}'; 
	}
`

export { CheckButtonStyled, Icon };
export default CheckButton;