import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useTasks } from "./TaskContext";

function TaskInput(){
    const {isdarkmode}=useTasks();
    const {addTask}=useTasks();
    const valueRef=useRef(null);
    const [value,setvalue]=useState('');
    const handleAddTask = () => {
        if(value===''){
            alert("enter text!!!");
        }
        else{
            addTask(value);
            setvalue('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    };

    useEffect(
        ()=>{
            if(valueRef.current){
                valueRef.current.focus();
            }
        }
    );
    return(
        <div className={` ${isdarkmode?'bg-black text-white':'bg-white text-black'} text-center `}>
            <div className="p-2 text-2xl">
                <h1>ADD NEW TASK</h1>
            </div>
            <div className="p-1">
                <input type="text" ref={valueRef} placeholder="enter task" value={value} onChange={(text)=>setvalue(text.target.value)} onKeyDown={handleKeyDown} className="bg-white text-black p-2 w-[50%] rounded border-1" />
                <button className={`${isdarkmode?'bg-gray-300 text-black':'bg-black text-white'} p-2 rounded`} onClick={()=>{
                    if(value===''){
                        alert("enter text!!!");
                    }
                    else{
                        addTask(value);
                        setvalue('');
                    }
                }}>ADD</button>
            </div>
        </div>
    )
}
export default TaskInput;