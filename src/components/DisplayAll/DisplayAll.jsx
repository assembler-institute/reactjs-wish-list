import React from 'react'

import TaskItem from '../TaskItem'


const DisplayAll = (dataDisplay) => {
    const {data} = dataDisplay;
    return(
        <div>
            {data.map( element => {
                if( element.needToDo == true){
                    return <TaskItem taskName={element.task} taskCheck={false} />
                }else{
                    return <TaskItem taskName={element.task}  taskCheck={true}/>
                }
                })
            }
        </div>
    )
};

export default DisplayAll;