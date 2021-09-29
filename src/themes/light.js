import bgLight from "../img/bg-light.jpg";

export const light = {
  shadow: {
    default: "0 0 4px rgba(0, 0, 0, 0.25)",
    input: { 
      hover: "inset 0 0 2px #a0a0a0",
      isWrong: "inset 0 0 4px #b80000 !important",
    },
  },
  background: {
    color: {
      default: "rgba(255, 255, 255, 0.75)",
      input: "#fcfcfc",
    },
    image: bgLight,
  },
  text: {
    color: {
      default: "#000000",
      placeholder: "initial",
    },
  }
};