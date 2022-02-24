var taskList

export const loadDatos = () => {
    return JSON.parse(localStorage.getItem('taskList')) || [];
}

export const removeTask = (taskToRemove) => {
    taskList = taskList.filter(task => {
        return !(task === taskToRemove);
    })
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

export function createTask (task, needToDo = true) {
    return{
        task: task,
        needToDo : needToDo
    }
}


export const addTask = (task, needToDo) => {
    var obj = createTask (task, needToDo);
    taskList = loadDatos()
    taskList.push(obj);

    localStorage.setItem('taskList', JSON.stringify(taskList));
    
}

export const getActive = (datos) => {
        const listActive = datos.filter(( item )=>{
            if(item.needToDo === true){
                return item
            }
        })

        return listActive;
}

export const getCompleted = (datos) => {
    const listCompleted = datos.filter(( item )=>{
        if(item.needToDo === false){
            return item
        }
    })

    return listCompleted;
}


export const getAll = () => {
    const listAll = loadDatos()

    return listAll;
}




