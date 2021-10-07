import bgDark from "../img/bg-dark.jpg";

export const dark = {
	shadow: {
		default: "0 0 4px rgba(255, 255, 255, 0.5)",
		input: { 
			hover: "inset 0 0 2px #e4e4e4",
			isWrong: "inset 0 0 4px #b80000 !important",
		},
		fieldButton: {
			hover: "inset 0 0 2px #e4e4e4",
		},
		todoItem: {
			default: "inset 0 0px 1px rgba(255, 255, 255, 0.75)",
		},
	},
	background: {
		color: {
			default: "rgba(0, 0, 0, 0.5)",
			input: {
				default: "rgba(0, 0, 0, 0.75)",
			},
			roundButton: { 
				hover: "linear-gradient(135deg, rgba(64, 128, 192, 0.5) 0%, rgba(224, 40, 252, 0.5) 100%)", 
				active: "linear-gradient(135deg, rgba(64, 128, 192, 1) 0%, rgba(224, 40, 252, 1) 100%)",
			},
			todoItem: {
				default: "#000000",
				isDone: "linear-gradient(135deg, rgba(64, 128, 192, 1) 0%, rgba(224, 40, 252, 1) 100%)",
			},
		},
		image: bgDark,
	},
	text: {
		color: {
			default: "#FFFFFF",
			placeholder: {
				default: "#C8C8C8",
			},
			fieldButton: {
				isDone: "#C8C8C8",
			},
		},
	}
}