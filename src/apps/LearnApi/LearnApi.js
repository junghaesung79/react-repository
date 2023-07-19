import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";
import useStore from './store';

const projectId = '2315920619;'
const api = 'https://api.todoist.com/rest/v2/tasks?project_id=2315920619';
const auth = 'Bearer 58a3b17d098bfd575124aa22313fee42aa2d3892';

const AppContainer = styled.div`
  width: 300px;
  height: 600px;
  border: 1px solid black;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Li = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
`
const XButton = styled.button`
  width: 20px;
  height: 20px;
  color: red;
  border: 1px solid red;
  background-color: white;
  position: absolute;
  right: 10px;
`


function Loading() {
  return (
    <>
      Loading...
    </>
  )
}

function TaskList() {
  const { taskList, fetchTasks } = useStore();
  useEffect(() => {
    axios.get(api, {
      headers: {
        Authorization: auth
      }
    }).then(({data}) => {
      fetchTasks(data);
    }).catch(err => console.log(err));
  }, []);

  function handleRemoveTask(e, targetId) {
    e.preventDefault();
    axios.delete(`https://api.todoist.com/rest/v2/tasks/${targetId}`, {
      headers: {
        Authorization: auth
      }
    }).then(() => {
      axios.get(api, {
        headers: {
          Authorization: auth
        }
      }).then(({data}) => {
        fetchTasks(data);
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }
  return (
    <>
      { taskList ? (
        <ul>
          {taskList.map((task) => {
            return (
              <Li key={task.id}>
                {task.content}<br/>
                {task.description}
                <XButton onClick={(e) => handleRemoveTask(e, task.id)}>x</XButton>
              </Li>
            )
          })}
        </ul>
      ) : <Loading /> }
    </>
  )
}

function InputTask() {
  const { AddTasks } = useStore();
  const [taskToAdd, setTaskToAdd] = useState('');
  function handleAddTask() {
    axios.post(api, {
      content: taskToAdd,
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: auth
        }
      }
    ).then(({data}) => {
      AddTasks(data);
    }).catch((err) => console.log(err));
    setTaskToAdd('');
  }
  return (
    <>
      <div>
        <input type="text" value={taskToAdd} onChange={(e) => setTaskToAdd(e.target.value)} />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </>
  )
}

function LearnApi() {

  function usefulButton(e) {
    e.preventDefault();
    console.log("How useful!");
    // <button onClick={usefulButton}>usefulButton</button>
  }
  return (
    <>
      <AppContainer>
        <TaskList/>
        <InputTask />
      </AppContainer>
    </>
  )
}
export default LearnApi;