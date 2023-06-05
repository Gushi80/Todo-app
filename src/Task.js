const Task = (props)=>{
    return(
        <div>
            <h1>{props.taskName}</h1>
            <div className = "buttons">
                <button onClick={()=>props.completeTask(props.id)}>Complete</button>
                <button onClick={()=>props.deleteTask(props.id)}>X</button>
            </div>
        </div>
    )
}

export default Task;