
import React, { useState } from 'react'
import Card from './Card';
import Button from '././Button';

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
  const onComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };
    
  return (
    <div className='todoBody'> 
      <div className='todo-layout'>
        <p></p>
      <input  
          className="todoItem" 
          onChange={(e) => setNewTask(e.target.value)}
         
          type="type" 
          placeholder='Seach todos' 
         value={newTask}
       />
         <Button onClick={addTask}  >
        Ekle
      </Button>
      </div>
    
      <div className='todoContent'>
   {
     tasks
     .filter(task => task.text.trim() !== "") 
     .map((task, index) => (
       <Card
         key={index}
         task={task}
         onDelete={() => deleteTask(index)}
         onComplete={() => onComplete(index)}
       />
     ))}
      </div>
     
       
      
    </div>
  )
}

export default ToDoItem
