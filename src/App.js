
import './App.css';
import {React,useState} from 'react';
function App() {
  const [todolist, setTodoList]= useState([]);
  const[newTask, setNewTask] = useState("")

  const handleChange = (event) =>{
      setNewTask(event.target.value)
  }

  const addTask =()=>{
    const task = {
      id: todolist.length === 0? 1: todolist[todolist.length-1].id + 1,
      taskName: newTask,
      
    };
      setTodoList([...todolist, task])
      setNewTask("")
  }

  const deleteTask =id=>{
      setTodoList(todolist.filter((task)=>task.id !==id));
  }
  
  const completeTask =(id)=>{
      setTodoList(
        todolist.map((task)=>{
          if(task.id === id){
              return{...task, completed: true}
          }else{
             return task;
          }
        })
      )
  }

        return (
    <div className="App">
      <div className='addTask'>
        <p id='ptodo'>TODO LIST</p>
        <input placeholder='Write your todo list...' onChange={handleChange} value={newTask}/>
        <button id='badd' onClick={addTask}>Add Task</button>
        </div>
        <p id='listp'>List of works</p>
        <div className='list'>
          {todolist.map((task)=>{
              return(
                
                <div className='task' style={{backgroundColor: task.completed ? "green" : "cyan"}}>
                  <li> {task.taskName}</li>
                  <button onClick={() => completeTask(task.id)}>Complete Task</button>
                  <button onClick={() => deleteTask(task.id)}>Delete Task</button>
                </div>    
                 
                  
              )
          })}

        </div>
      </div>
      
    
  );
}

export default App;
