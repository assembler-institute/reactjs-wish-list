import bgLight from "../img/bg-light.jpg";

export const light = {
  shadow: {
    default: "0 0 4px rgba(0, 0, 0, 0.25)",
    input: { 
      hover: "inset 0 0 2px #a0a0a0",
      isWrong: "inset 0 0 4px #b80000 !important",
    },
    fieldButton: {
			hover: "inset 0 0 2px #a0a0a0",
		},
    todoItem: {
			default: "inset 0 0px 1px rgba(0, 0, 0, 0.75)",
		},
  },
  background: {
    color: {
      default: "rgba(255, 255, 255, 0.75)",
      input: {
        default: "#FCFCFC",
      },
      roundButton: { 
				hover: "linear-gradient(135deg, rgba(64, 128, 192, 0.5) 0%, rgba(224, 40, 252, 0.5) 100%)", 
				active: "linear-gradient(135deg, rgba(64, 128, 192, 1) 0%, rgba(224, 40, 252, 1) 100%)",
			},
      todoItem: {
				default: "#FFFFFF",
				isDone: "linear-gradient(135deg, rgba(64, 128, 192, 1) 0%, rgba(224, 40, 252, 1) 100%)",
			},
    },
    image: bgLight,
  },
  text: {
    color: {
      default: "#000000",
      placeholder: {
				default: "#888888",
			},
      fieldButton: {
				isDone: "#888888",
			},
    },
  }
};