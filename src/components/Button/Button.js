import React, { Component } from "react";
import styled from "styled-components";
import "./Button.scss";

const Button = styled.button`
  padding: 0.5rem;
  cursor: pointer;

  border: none;
  outline: none;

  background: cornflowerblue;
  color: white;
`;

export default Button;