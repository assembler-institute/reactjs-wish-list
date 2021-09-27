import "./ErrorMessage.scss";

export default function ErrorMessage(props) {
  const { children } = props;

  return <p className="error-message">{children}</p>;
}
