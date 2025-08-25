import { useTasks } from "./TaskContext";
function Remainders(){
    const {isdarkmode} =useTasks(); 
        return(
            <div className={` ${isdarkmode?'bg-black text-white':'bg-white text-black'} text-center text-4xl `}>
                <h1>will update later!! remainders</h1>
            </div>
        )
}
export default Remainders;