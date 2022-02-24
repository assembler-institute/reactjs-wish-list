import React, { useContext } from "react";
import Input from "../Input";
import { FaWindowClose } from 'react-icons/fa';
import { BsPencilSquare } from "react-icons/bs";
import { AppContext } from "../../AppState";
import { addTask, loadDatos } from "../Functions/functions";
import { Link } from "react-router-dom";


const TaskItem = ({taskName, taskCheck}) => {

    const [checked, setCheked] = useContext(AppContext);
    const [editinput, seteditInput] = useContext(AppContext);

    function setneedToDo(taskName){
        let taskList = loadDatos();

        var resultado = taskList.find(contact => {
            return contact.task === taskName
        })
        if (resultado === ""){
            alert('Task not Found ')

        }else if(resultado.needToDo === true ){
            deleteTask()
            resultado.needToDo = false;
            addTask(resultado.task, resultado.needToDo)

        }else if (resultado.needToDo === false){
            deleteTask()
            resultado.needToDo = true;
            addTask(resultado.task, resultado.needToDo)
        }
    }

    function deleteTask() {
        let tempArray = JSON.parse(localStorage.getItem('taskList')) || [];
        tempArray = tempArray.filter((element) => element.task !== taskName);
            localStorage.setItem("taskList", JSON.stringify(tempArray))
    };

    function checkTaskState (e){
        e.preventDefault();
        setCheked({...checked, checked: !checked})
        setneedToDo(taskName)
    }

    function editTask (e){
        const taskList = loadDatos();
        const resultado = taskList.find(item => {
            if (item.task == taskName){
                let itemName= item.task
                return itemName;
            }
        })

        seteditInput({...editinput, resultado})
    }

    return(
        <div className="todo-item">
            <div className="checker">
                <span>
                    <Input inputType="checkbox"  inputEvent={checkTaskState} checked={taskCheck}/>
                </span>
            </div>
            <p>{taskName}</p>
            <div className="editBtn" >
                <Link to="/Edit" onClick={ () =>editTask()}>
                    <BsPencilSquare size='1.5em'/>
                </Link>
            </div>
            <div className='closeBtn'>
                <a className="remove-todo-item" onClick={deleteTask}>
                    <FaWindowClose size='1.5em'/>
                </a>
            </div>
        </div>
    )
}


export default TaskItem;