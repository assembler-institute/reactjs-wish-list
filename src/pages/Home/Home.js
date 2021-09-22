import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import { Main, TasksList, NewTaskForm, Footer, Toggle } from "../../components";

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

const Section = styled.section`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`

function Home({
  tasks,
  theme,
  filteredTasks,
  changeTheme,
  saveNewTask,
  saveOrderTasks,
  onKeyDownSubmit,
  toggleEditTask,
  saveEditTask,
  onKeyDownEdit,
  toggleDoneTask,
  removeTask,
  filterTasks,
  removeAllCompletedTasks,
}) {
  return (
    <Main className="main container pt-5">

      <Section className="row w-100">
        <DragDropContext
          onDragEnd={(result) => {
            const { source, destination } = result;
            if (!destination) return;
            if (source.index === destination.index) return;
            tasks.move(source.index, destination.index);
            saveOrderTasks(tasks)
          }}
        >
          <div className="col-md-6 offset-md-3">
            <div className="d-flex justify-content-between">
              <h1>Hello Taskmaker</h1>
              <Toggle
                changeTheme={changeTheme}
                theme={theme}
              />
            </div>

            <NewTaskForm
              saveNewTask={saveNewTask}
              onKeyDownSubmit={onKeyDownSubmit}
            />

            <TasksList
              filteredTasks={filteredTasks}
              toggleEditTask={toggleEditTask}
              saveEditTask={saveEditTask}
              onKeyDownEdit={onKeyDownEdit}
              toggleDoneTask={toggleDoneTask}
              removeTask={removeTask}
            />

            <Footer
              filterTasks={filterTasks}
              filteredTasks={filteredTasks}
              removeAllCompletedTasks={removeAllCompletedTasks}
            />
          </div>
        </DragDropContext>
      </Section>
    </Main>
  );
}

export default Home;
