import styled from "styled-components";

import { Main, TasksList, NewTaskForm, Footer, Toggle } from "../../components";

const Section = styled.section`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`

function Home({
  theme,
  filteredTasks,
  changeTheme,
  saveNewTask,
  onKeyDownSubmit,
  toggleEditTask,
  saveEditTask,
  onKeyDownEdit,
  toggleDoneTask,
  removeTask,
  filterTasks,
  removeAllCompletedTasks
}) {
  return (
    <Main className="main container pt-5">
      <Section className="row w-100">
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
      </Section>
    </Main>
  );
}

export default Home;