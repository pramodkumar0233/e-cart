// TaskContext.js
import { createContext, useContext, useState } from "react";

const NoteContext = createContext(); // the "box"

export function NoteProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isdarkmode, setmode]=useState(false);

  // functions for managing tasks
  const togglemode=()=>setmode(prevmode=>!prevmode)
  const addTask = (task) => setTasks([task,...tasks]);
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const editTask = (index, newTask) =>
    setTasks(tasks.map((t, i) => (i === index ? newTask : t)));

  // put everything into the "box"
  return (
    <NoteContext.Provider value={{ tasks, addTask, deleteTask, editTask,togglemode,isdarkmode }}>
      {children}
    </NoteContext.Provider>
  );
}

// helper function so components can use the box
export function useNotes() {
  return useContext(NoteContext);
}
