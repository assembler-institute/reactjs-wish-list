export default function DeleteButton() {}

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick } = this.props;

    return <button className="delete-button" onClick={handleClick}></button>;
  }
}
