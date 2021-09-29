import { ErrorMessageStyled } from "./ErrorMessage.styled";

export default function ErrorMessage(props) {
  const { children, dataTestId } = props;

  return <ErrorMessageStyled data-testid={dataTestId}>{children}</ErrorMessageStyled>;
}
