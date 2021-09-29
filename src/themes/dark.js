import bgDark from "../img/bg-dark.jpg";

export const dark = {
	shadow: {
		default: "0 0 4px rgba(255, 255, 255, 0.5)",
		input: { 
			hover: "inset 0 0 2px #e4e4e4",
			isWrong: "inset 0 0 4px #b80000 !important",
		}
	},
	background: {
		color: {
			default: "rgba(0, 0, 0, 0.5)",
			input: "#404040",
		},
		image: bgDark,
	},
	text: {
		color: {
			default: "#FFFFFF",
			placeholder: "#C8C8C8",
		},
	}
}