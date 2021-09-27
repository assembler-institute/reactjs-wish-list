import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Form, Formik } from "formik";
import taskSchema from "components/molecules/NewTaskForm/task-schema";
import { ErrorMessage } from 'components/atoms'

import { Button, InputEdit, CheckDone } from "components/atoms";

const ButtonDelete = styled.button`
  color: grey;
  background-color: #ffffff;
  border: 0;
  font-weight: bold;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

const TaskItem = styled.li`
  display: flex;
  flex-direction: row;
  min-height: 1px;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #e6e6e6;

  &:nth-child(1) {
    border-radius: 1px 1px 0 0;
  }
  &:hover{
      background: linear-gradient(to right, #e6e6e6, white);
  }
`;

const FormEditTask = styled(Form)`
  width: 100%;
`;

function Task({
  task,
  index,
  toggleEditTask,
  saveEditTask,
  onKeyDownEdit,
  toggleDoneTask,
  removeTask,
  onKeyDownSubmit,
}) {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(draggableProvided) => (
        <TaskItem
          key={task.id}
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
        >
          <CheckDone task={task} toggleDoneTask={toggleDoneTask} />
          <Button toggleEditTask={toggleEditTask} task={task} />

          <Formik
            initialValues={{
              text: task.text,
              done: task.done,
            }}
            validationSchema={taskSchema}
            onSubmit={(values, { resetForm }) => {
              saveEditTask(values.text, task.id);
              resetForm({});
            }}
          >
            {({ handleSubmit, errors, values, touched, handleChange,handleBlur }) => (
              <FormEditTask onKeyDown={(e) => onKeyDownSubmit(e, handleSubmit)}>
                <InputEdit
                  task={task}
                  values={values.text}
                  onKeyDownEdit={onKeyDownEdit}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  title="Write your task"
                />
                {touched.text && errors.text ? (
                  <ErrorMessage errors={errors} />
                ) : null}
              </FormEditTask>
            )}
          </Formik>
          <ButtonDelete
            className="btn btn-secondary"
            onClick={(e) => removeTask(e, task.id)}
          >
            X
          </ButtonDelete>
        </TaskItem>
      )}
    </Draggable>
  );
}

export default Task;
