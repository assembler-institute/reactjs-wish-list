import React, { useState, useEffect, useContext } from 'react'
import Input from '../Input'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'
import { addTask, loadDatos } from '../Functions/functions'
import { AppContext } from '../../AppState'

const EditTask = ({ editText }) => {

    const navigate = useNavigate();
    const [load, setload] = useContext(AppContext)

    const [valueIn, setvalueIn] = useState(editText.task)
    const handleClose = () => navigate('/All');

    const handleChange = (e) => {
        setvalueIn(e.target.value)
    }

    const findElement = () => {
        let list = loadDatos();

        list = list.filter((element) => element.task !== editText.task);
        localStorage.setItem("taskList", JSON.stringify(list))

        addTask(valueIn)
        handleClose();
        setload(loadDatos())
    }

    return (
        <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Update your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input inputType='text' value={valueIn} inputEvent={handleChange} />
        </Modal.Body>
        <Modal.Footer>
            <a href="/All"><button className='btn btn-secondary' onClick={() => handleClose()}>
                Close
            </button></a>
            <button className='btn btn-primary ' type='button' onClick={findElement}>
                Save Changes
            </button>
        </Modal.Footer>
    </Modal>
    );
}

export default EditTask;
