import "./ErrorMessage.scss";

export default function ErrorMessage(props) {
  const { children, dataTestId } = props;

  return (
    <p className="error-message" data-testid={dataTestId}>
      {children}
    </p>
  );
}
