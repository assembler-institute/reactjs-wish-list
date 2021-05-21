import React from "react";

function EditTodo({ todo, handleChangeTodo, handleEditSubmit, editTodoName }) {
  function onHandleChange(e) {
    handleChangeTodo(e);
  }
  function onHandleSubmit(e) {
    handleEditSubmit(e, todo.id);
  }

  return (
    <>
      <form className="TODO__Form" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Create task"
          className="TODO__Form__New"
          id={todo.name}
          name={todo.name}
          value={editTodoName}
          onChange={onHandleChange}
        />
      </form>
    </>
  );
}

// class EditTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { editTodoName: "" };

//     this.onHandleChange = this.onHandleChange.bind(this);
//     this.onHandleSubmit = this.onHandleSubmit.bind(this);
//   }

//   onHandleSubmit(e) {
//     const { todo, handleEditSubmit } = this.props;
//     const { editTodoName } = this.state;
//     handleEditSubmit(e, todo.id, editTodoName);
//   }

//   onHandleChange(e) {
//     this.setState({ editTodoName: e.target.value });
//   }

//   render() {
//     const { todo } = this.props;
//     const { editTodoName } = this.state;

//     return (
//       <>
//         <form className="TODO__Form" onSubmit={this.onHandleSubmit}>
//           <input
//             type="text"
//             placeholder="Create task"
//             className="TODO__Form__New"
//             id={todo.name}
//             name={todo.name}
//             value={editTodoName}
//             onChange={this.onHandleChange}
//           />
//         </form>
//       </>
//     );
//   }
// }

export default EditTodo;
