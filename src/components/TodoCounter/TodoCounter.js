export default function TodoCounter() {}
import "/TodoCounter.scss"

class TodoCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            itemsLeft: 0
        }
        
    }

    updateCounter(){

    }

    render(){
        return (
        <label className="todo-counter">
            Items left : {itemsLeft}
        </label>
        )
    }
}
