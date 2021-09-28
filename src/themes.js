const LightTheme = {
  pageBackground: "#ffffff",
  titleColor: "#282c36",
  toggleColor: "black",
  gradientBackground: "linear-gradient(to right, #e6e6e6, white);",
  borderColor: "#e6e6e6",
  boxShadow: "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important"
};

const DarkTheme = {
  pageBackground: "#151515",
  titleColor: "white",
  toggleColor: "white",
  gradientBackground: "linear-gradient(to right, #000000, #282c36)",
  borderColor: "#424242",
  boxShadow: "0 10px 16px 0 rgb(255 255 255 / 8%), 0 6px 20px 0 rgb(255 255 255 / 7%) !important"
}

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
}