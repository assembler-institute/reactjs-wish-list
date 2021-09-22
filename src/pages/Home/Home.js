import { Main, TasksList, NewTaskForm, Footer } from "../../components";
import { DragDropContext } from "react-beautiful-dnd";

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

function Home({
  tasks,
  filteredTasks,
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
      <section className="row">
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
      </section>
    </Main>
  );
}

export default Home;
