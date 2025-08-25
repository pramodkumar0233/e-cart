import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNotes } from "./NoteContext";

function Notes(){
    const {isdarkmode}=useNotes();
    const {addTask}=useNotes();
    const valueRef=useRef(null);
    const [value,setvalue]=useState('');

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
                <h1>ADD NEW NOTES</h1>
            </div>
            <div className="p-1">
                <input type="text" ref={valueRef} placeholder="enter task" value={value} onChange={(text)=>setvalue(text.target.value)} className="bg-white text-black p-2 w-[50%] rounded border-1" />
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
export default Notes;