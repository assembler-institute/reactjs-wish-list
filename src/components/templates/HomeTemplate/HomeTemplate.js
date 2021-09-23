import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import { NewTaskForm } from "../../../components/molecules";
import { TasksList, Header } from "../../../components/organisms";

import background from "../../../img/mountains.jpg";

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

const BgImage = styled.header`
  position: absolute;

  img{
    height:250px;
    filter:blur(1px);
    width:100%;
    width: 100vw;
  }
`;

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
  background-color: white;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
`;

const Footer = styled.p`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

function HomeTemplate({
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
    <>
      <BgImage >
        <img src={background}></img>
      </BgImage>
      <Header
        changeTheme={changeTheme}
        theme={theme}
      />
      <Main className="main">
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
          </DragDropContext>
        </Section>
      </Main>
      <Footer>Drag and drop to reorder list</Footer>
    </>
  );
}

export default HomeTemplate;
