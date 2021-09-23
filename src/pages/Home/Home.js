import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import { Main } from "../../components";
import { NewTaskForm } from "../../components/molecules";
import { TasksList, Header } from "../../components/organisms";

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  border-radius: 5px;
  padding: 0;
  margin-top: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
`;

const FooterPar = styled.p`
  text-align: center;
  margin-top: 2rem;
`;

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
      <Section>
        <DragDropContext
          onDragEnd={(result) => {
            const { source, destination } = result;
            if (!destination) return;
            if (source.index === destination.index) return;
            tasks.move(source.index, destination.index);
            saveOrderTasks(tasks);
          }}
        >
          <Header
            changeTheme={changeTheme}
            theme={theme}
          />
          <Container>
            <NewTaskForm
              saveNewTask={saveNewTask}
              onKeyDownSubmit={onKeyDownSubmit}
            />
          </Container>
          <Container>
            <TasksList
              filterTasks={filterTasks}
              filteredTasks={filteredTasks}
              toggleEditTask={toggleEditTask}
              saveEditTask={saveEditTask}
              onKeyDownEdit={onKeyDownEdit}
              toggleDoneTask={toggleDoneTask}
              removeTask={removeTask}
              removeAllCompletedTasks={removeAllCompletedTasks}
            />
          </Container>
          <FooterPar>Drag and drop to reorder list</FooterPar>
        </DragDropContext>
      </Section>
    </Main>
  );
}

export default Home;
