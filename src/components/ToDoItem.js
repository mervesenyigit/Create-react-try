
import React, { useState } from 'react'
import Card from './Card';

function ToDoItem() {
     
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');


  const addTask = () => {
  
      setTasks([...tasks, { text: newTask, completed: false }]); 
      setNewTask('');
    
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

    
  return (
    <div>
      <div>
        <p></p>
      <input  
          className="" 
          onChange={(e) => setNewTask(e.target.value)}
          type="type" 
          placeholder='Seach todos' 
         value={newTask}
       />
      </div>
      <button onClick={addTask}>
        Ekle
      </button>
      <div className='todoContent'>
   {
     tasks
     .filter(task => task.text.trim() !== "") 
     .map((task, index) => (
       <Card
         key={index}
         task={task}
         onDelete={() => deleteTask(index)}
       />
     ))}
      </div>
     
       
      
    </div>
  )
}

export default ToDoItem
