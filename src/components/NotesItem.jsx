import { MdDelete, MdModeEdit } from "react-icons/md";
import { useNotes } from "./NoteContext";
function NoteItem(props){
    const {deleteTask,editTask}=useNotes();
return(
    <div className="flex justify-between items-center rounded bg-white text-black border-b-1 shadow-xl m-2 w-[60%] h-[30%]">
        <div className="flex-grow flex-shrink overflow-hidden break-words p-1">
             <ul>
                <li key={props.index}>
                    {props.task}
                </li>
             </ul>
        </div>
        <div className="flex">
            <button onClick={()=>deleteTask(props.index)} className="bg-gray-200 text-black p-3 m-1 rounded"><MdDelete /></button>
            <button onClick={()=>{
          const newValue = prompt("Edit Task:", props.task);
          if (newValue) editTask(props.index, newValue);
        }} className="bg-blue-500 text-black p-3 m-1 rounded"><MdModeEdit /></button>
        </div>
    </div>
)
}
export default NoteItem;