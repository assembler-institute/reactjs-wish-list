import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .card-wide{
    background-color:${({ theme }) => theme.mainBackground};
    border-bottom:1px solid ${({ theme }) => theme.border_wide};
    transition: all 0.50s linear;
  }
  p{
    color:${({ theme }) => theme.p};
    transition: all 0.50s linear;
  }
  button.btnDarkMode{
    color:${({ theme }) => theme.h1};
    transition: all 0.50s linear;
  }
  .whiteBg {
    background-color: ${({ theme }) => theme.mainBackground};
    transition: all 0.50s linear;
  }
  span{
    color:${({ theme }) => theme.p};
    transition: all 0.50s linear;
  }
  input{
    background-color:${({ theme }) => theme.mainBackground};
    transition: all 0.50s linear;
  }
  .gray-color {
    color: ${({ theme }) => theme.border_wide};
    transition: all 0.50s linear;
  }
  .mainBackground {
    background-color: ${({ theme }) => theme.background};
    transition: all 0.50s linear;
  }
  .bgPicture {
    background-image: url(${({ theme }) => theme.bigImage});
    transition: all 0.50s linear;
  }
  h1{
    color:${({ theme }) => theme.h1};
    transition: all 0.50s linear;
  }
  .validation{
    color:${({ theme }) => theme.validation};
    transform:translateY(-7px);
  }
  `;
