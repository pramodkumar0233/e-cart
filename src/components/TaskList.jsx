import { useTasks } from "./TaskContext";
import TaskItem from "./TaskItem";

function TaskList(){
    const {tasks}=useTasks();
    const {isdarkmode}=useTasks();
    // const task=task;
    return(
        <div className={`flex flex-col items-center ${isdarkmode? 'text-white': 'text-black'} `}>
            <h1>TASK LIST:</h1>
            
                {tasks.map((task,index)=>(
                    // <li key={index}>{task}</li>
                    <TaskItem task={task} index={index} />
                ))}
        
        </div>
    )
}
export default TaskList;