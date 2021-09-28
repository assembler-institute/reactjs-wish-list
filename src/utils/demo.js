// handles all the data for starting the project

import { toDoS } from "./toDoExamples";

const LOCAL_STORAGE_KEY = "task-todos";
const COMPLETED_KEY = "task-completed";
const ACTIVE_KEY = "task-active";

function appKeys() {
  return [
    {
      id: "all-tasks",
      stringKey: LOCAL_STORAGE_KEY,
      path: "/",
      pageDescr: "All Tasks",
      list: "todos",
    },
    {
      id: "completed-tasks",
      stringKey: COMPLETED_KEY,
      path: "/completed",
      pageDescr: "Completed Tasks",
      list: "completed",
    },
    {
      id: "active-tasks",
      stringKey: ACTIVE_KEY,
      path: "/active",
      pageDescr: "Active Tasks",
      list: "active",
    },
  ];
}

function getLocalStorageObject(key) {
  let result;
  if (localStorage.getItem(key)) {
    const arrayObjetos = JSON.parse(localStorage.getItem(key));
    result = { tasks: arrayObjetos };
    // eslint-disable-next-line
    console.log("devuelvo result: ", result);
  } else {
    // eslint-disable-next-line
    console.log("result is undefined");
  }

  return result;
}

function saveIntoLocal(key, array) {
  // eslint-disable-next-line
  console.log("Soy el array a guardar: ", array, "en la key: ", key);
  localStorage.setItem(key, JSON.stringify(array));
  // eslint-disable-next-line
  console.log("Examples saved");
}

function setActiveTasks() {
  const allTaksObj = getLocalStorageObject(LOCAL_STORAGE_KEY);
  const arrayActive = allTaksObj.tasks.filter((obj) => {
    return obj.done !== true;
  });
  // eslint-disable-next-line
  console.log(arrayActive);
  saveIntoLocal(ACTIVE_KEY, arrayActive);
}

function setCompletedTasks() {
  const allTaksObj = getLocalStorageObject(LOCAL_STORAGE_KEY);
  const completedList = allTaksObj.tasks.filter((obj) => obj.done === true);
  // eslint-disable-next-line
  console.log(completedList);
  saveIntoLocal(COMPLETED_KEY, completedList);
}

function getTextFromTasks(stringKey) {
  const { key } = getLocalStorageObject(stringKey);
  return key.map((obj) => obj.text);
}

function getLastItemId(key) {
  let list = getLocalStorageObject(key);
  // eslint-disable-next-line
  console.log("soy la list de get", list);

  let id;
  if (list !== undefined) {
    // eslint-disable-next-line
    console.log("entre en el primerq pcion de id", id);
    list = list.tasks;
    // eslint-disable-next-line
    console.log("soy list de la key tasks", list);
    id = list[list.length - 1].id;
  } else {
    // eslint-disable-next-line
    console.log("entro aqui en el id=0");
    id = 0;
  }
  // eslint-disable-next-line
  console.log("Soy el id: ", id);

  return id;
}

function getLocalStorageFlag(key) {
  return JSON.parse(localStorage.getItem(key));
}

function startDemo() {
  // eslint-disable-next-line
  console.log("Demo starting...");
  saveIntoLocal(LOCAL_STORAGE_KEY, toDoS);
  setCompletedTasks();
  setActiveTasks();
  // eslint-disable-next-line
  console.log("Examples Filtered");
}

function clearCompleted() {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    const objectActives = getLocalStorageObject(ACTIVE_KEY);
    const list = Object.values(objectActives)[0];
    saveIntoLocal(LOCAL_STORAGE_KEY, list);
    localStorage.removeItem(COMPLETED_KEY);
  }
}

function handleSubmit(e) {
  e.preventDefault();
  // eslint-disable-next-line
  console.log("im in the handle submit, getting info...");

  const lastTaskId = getLastItemId(LOCAL_STORAGE_KEY);

  const newTask = {
    id: lastTaskId + 1,
    name: `task_${lastTaskId + 1}`,
    text: e.target.value,
    isEdditing: false,
    done: false,
    list: "active",
  };

  // eslint-disable-next-line
  console.log("im the nrew task", newTask);

  const tasksObject = getLocalStorageObject(LOCAL_STORAGE_KEY);
  let listaDeTasks = [];
  // eslint-disable-next-line
  console.log("im task object", tasksObject);

  if (tasksObject !== undefined) {
    // eslint-disable-next-line
    console.log("ya tengo tasks");
    listaDeTasks = tasksObject.tasks;
    // eslint-disable-next-line
    console.log(listaDeTasks, "...Lista de tasks");
    listaDeTasks.push(newTask);
  } else {
    listaDeTasks = [newTask];
  }
  // eslint-disable-next-line
  console.log("Soy el array a pasar a la funcion SAVE: ", listaDeTasks);
  saveIntoLocal(LOCAL_STORAGE_KEY, listaDeTasks);
  setCompletedTasks();
  setActiveTasks();
  // eslint-disable-next-line
  console.log("Examples Filtered");
  // eslint-disable-next-line
  console.log("localStorageUpdated: ", LOCAL_STORAGE_KEY);
}

function handleClick(e) {
  e.preventDefault();
  const taskId = e.target.taskid;
  // eslint-disable-next-line
  console.log("soy el id del task", taskId);
}

export {
  saveIntoLocal,
  getLocalStorageObject,
  startDemo,
  getLocalStorageFlag,
  getLastItemId,
  clearCompleted,
  getTextFromTasks,
  handleSubmit,
  handleClick,
  appKeys,
};
