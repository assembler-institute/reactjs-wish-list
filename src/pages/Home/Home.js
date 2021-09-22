import { Main, TasksList, NewTaskForm, Footer } from "../../components";

function Home({
  filteredTasks,
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
      <section className="row">
        <div className="col-md-6 offset-md-3">

          <div className="d-flex justify-content-between">
            <h1>Hello Taskmaker</h1>
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
      </section>
    </Main>
  );
}

export default Home;