import styled from "styled-components";

import { ReactComponent as ErrorSvg } from 'resources/img/error.svg';

const StyledErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  font-size: 1rem;
  padding-top: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;

function ErrorMessage({ errors }) {
  return (
    <StyledErrorMessage>
      <ErrorSvg />
      {errors.text}
    </StyledErrorMessage>
  );
}

export default ErrorMessage;