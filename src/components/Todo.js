import React from 'react'

function Todo ({text, todo, todos, setTodos}){
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };    
    const completeHandler = () => {
        setTodos(todos.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                };
            }
            return item;
        })
        );
    };

return (
    <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
        <button onClick={completeHandler} type="button" className="complete-btn">
            <i className="fas fa-check" />
        </button>
        <button onClick={deleteHandler} type="button" className="trash-btn">
            <i className="fas fa-trash" />
        </button>
    </div>
)
}

export default Todo