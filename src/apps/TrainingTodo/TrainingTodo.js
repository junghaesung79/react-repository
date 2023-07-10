import React, { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import useStore from './store'

const AppContainer = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 600px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;`
const AddForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 10px`
const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  color: red;
  background-color: white;
  border: 1px solid red;
  position: absolute;
  right: 10px;`

function TaskList() {
  const { taskList, checkTask, removeTask } = useStore();
  function handleRemove(targetId) {
    removeTask(targetId)
  }
  return (
    <>
      <ul style={{'display': 'flex', 'flexDirection': 'column'}}>
        {taskList.map(task => {
          return (
            <li key={task.id} style={{'position': 'relative'}}>
              <input type="checkbox" checked={task.done} onChange={() => checkTask(task.id)} />
              <span>{task.title}</span>
              <RemoveButton type="button" onClick={() => handleRemove(task.id)}>x</RemoveButton>
            </li>
          )
        })}
      </ul>
    </>
  )
}

function AddTask() {
  const [taskToAdd, setTaskToAdd] = useState('');
  const { taskList, addTask } = useStore();
  function handleSubmit(e) {
    e.preventDefault();
    const index = taskList.findLast(task => task).id + 1;
    const newTask = {id: index, title: taskToAdd, done: false}
    addTask(newTask);
    setTaskToAdd('');
  }
  return (
    <>
      <AddForm>
        <input style={{'width': '280px'}} type='text' placeholder='task...' value={taskToAdd} onChange={(e) => setTaskToAdd(e.target.value)} />
        <button type='submit' onClick={handleSubmit}>Add</button>
      </AddForm>
    </>
  )
}

function Statistics() {
  const { taskList } = useStore();
  const [total, setTotal] = useState(taskList.length);
  const [checked, setChecked] = useState(taskList.filter(task => task.done === true).length);
  const [characters, setCharacters] = useState(taskList.map(task => task.title).join().length);
  useEffect(() => {
    setTotal(taskList.length);
    setChecked(taskList.filter(task => task.done === true).length);
    setCharacters(taskList.map(task => task.title).join().length);
  }, [taskList])
  
  return (
    <div>
      <div>total: {total}</div>
      <div>checked: {checked}</div>
      <div>characters: {characters}</div>
    </div>
  )
}

export default function TrainingTodo() {
  const { taskList } = useStore();
  return (
    <div style={{'display': 'flex', 'alignItems': 'center'}}>
      <AppContainer>
        <TaskList/>
        <AddTask />
      </AppContainer>
      <Statistics />
    </div>
  )
}