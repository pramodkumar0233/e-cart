// import { useState } from "react";
import TaskInput from "./TaskInput";
import { Routes,Route } from "react-router-dom";
// import { useEffect } from "react";
import TaskList from "./TaskList";
import Notes from "./Notes";
import Remainders from "./Remainders";
import { useTasks } from "./TaskContext";
import NoteList from "./NoteList";

function Body(){
    
    const {isdarkmode}=useTasks();
    return(
        <div className={`w-[80%] ${isdarkmode?'bg-black':'bg-white'} text-center  flex flex-col `}>
            <Routes>
                <Route path="/" element={
                    <>
                        <TaskInput />
                        <TaskList />
                    </>
                } />
                <Route path="/tasks" element={
                    <>
                        <TaskInput />
                        <TaskList />
                    </>
                } />
                <Route path="/notes" element={<>
                <Notes /> <NoteList />
                </>} />
                <Route path="/reminders" element={<Remainders />} />
            </Routes>
        </div>
    )
}
export default Body;