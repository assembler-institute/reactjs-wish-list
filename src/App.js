import React, { useState, useEffect, useContext } from 'react'
import './App.scss';
import { addTask, getActive, getAll, getCompleted, loadDatos } from './components/Functions/functions';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DisplayAll from './components/DisplayAll/DisplayAll';
import { AppContext } from './AppState';
import EditTask from './components/EditTask';




function App() {

  //useContext data
  const [checked, setCheked] = useContext(AppContext);
  const [editinput, seteditInput] = useContext(AppContext);

  //JSON Datos
  const [data, setdata] = useState(loadDatos());
  const [submit, setSubmit] = useState(false);


  useEffect(() => {
    setInterval(() => {
      var list = JSON.parse(localStorage.getItem('taskList')) || [];
      (list != data && setdata(loadDatos()))
    }, 500);
  });

  //Inputs states
  const [input, setinput] = useState('')
  const handleChange = ({ target: { value } }) => {
    setinput(value)
  }


  //Handle states
  const handleSubmit = (e) => {
    e.preventDefault();
    (submit === true) ? setSubmit(false) : setSubmit(true);
    addTask(input);
    setinput('')
  }

  useEffect(() => {
    setdata(loadDatos())
  }, [submit]);


  const dataActive = getActive(data);
  const dataCompleted = getCompleted(data);
  const dataAll = getAll();

  //Views by Path and Route
  return (
    <Routes>
      <Route path='/' element={
        <Home
          Submit={handleSubmit}
          Change={handleChange}
          stateinput={input}
          loadData={data}
        />
      } />
      <Route path='/Active' element={
        <Home
          Submit={handleSubmit}
          Change={handleChange}
          stateinput={input}
          loadData={data}
          componentDisplay={<DisplayAll data={dataActive} />}
        />
      } />
      <Route path='/Completed' element={
        <Home
          Submit={handleSubmit}
          Change={handleChange}
          stateinput={input}
          loadData={data}
          componentDisplay={<DisplayAll data={dataCompleted} />}
        />
      } />
      <Route path='/All' element={
        <Home
          Submit={handleSubmit}
          Change={handleChange}
          stateinput={input}
          loadData={data}
          componentDisplay={< DisplayAll data={dataAll} />}
        />
      }
      />
      <Route path='/Edit' element={
        <Home
          Submit={handleSubmit}
          Change={handleChange}
          stateinput={input}
          loadData={data}
          componentDisplay={< DisplayAll data={dataAll} />}
          modalDisplay={<EditTask editText={editinput.resultado} />}
        />
      }
      />
    </Routes>
  );
}

export default App;
