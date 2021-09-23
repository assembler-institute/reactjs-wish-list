import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import { Main, Footer, Toggle } from "../../components";
import { NewTaskForm } from "../../components/molecules";
import { TasksList } from "../../components/organisms";

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

const Section = styled.section`
  /*   max-width: 600px; */
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  letter-spacing: 3px;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Container = styled.div
  `
border-radius: 5px;
  padding: 0;
  margin-top: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
`;

const Header = styled.header`
  width: 100%;
  margin-top: 20px;
  max-width: 600px;
  box-shadow: none;
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
          <Header className="d-flex justify-content-between">
            <Title>TO DO</Title>
            <Toggle changeTheme={changeTheme} theme={theme} />
          </Header>
          <Container>
            <NewTaskForm
              saveNewTask={saveNewTask}
              onKeyDownSubmit={onKeyDownSubmit}
            />
          </Container>
          <Container>
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
          </Container>
          <FooterPar>Drag and drop to reorder list</FooterPar>
        </DragDropContext>
      </Section>
    </Main>
  );
}

export default Home;
