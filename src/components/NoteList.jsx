import { useNotes } from "./NoteContext";
import NoteItem from "./NotesItem";

function NoteList(){
    const {tasks}=useNotes();
    const {isdarkmode}=useNotes();
    // const task=task;
    return(
        <div className={`flex flex-col items-center ${isdarkmode? 'text-white': 'text-black'} `}>
            <h1>NOTE LIST:</h1>
            
                {tasks.map((task,index)=>(
                    // <li key={index}>{task}</li>
                    <NoteItem task={task} index={index} />
                ))}
        
        </div>
    )
}
export default NoteList;