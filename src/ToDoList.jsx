import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addtask() {
    if(newTask.trim()!=""){
        setTasks(t=>[...tasks,newTask]);
        setNewTask("");
    }
  }
  function deleteTask(i) {
    const updatedTasks=tasks.filter((_,index) => i!=index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if(index>0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if(index<tasks.length-1){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter A Task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addtask}>
            Add
          </button>
        </div>
      </div>

      <ol>

        {tasks.map((task, i) => (
          <li key={i}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(i)}>Delete</button>
            <button className="move-button" onClick={()=>moveTaskUp(i)}>👆</button>
            <button className="move-button" onClick={()=>moveTaskDown(i)}>👇</button>
          </li>
        ))}
      </ol>
    </>
  );
}
export default ToDoList;
