export default function DeleteButton() {}

class DeleteButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listToDelete: [],
        }
    };

        deleteItem(item){
            const list = this.state.listToDelete.filter(i => i.id !== item.id)
            this.setState({list})
        }
    
    render(){
        return <button className="delete-button" onClick={(this.deleteItem(item))} >
            X
            </button>
    }
}
