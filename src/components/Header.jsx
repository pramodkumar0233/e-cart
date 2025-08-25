import { useTasks } from "./TaskContext";
import { Sun, Moon } from 'lucide-react';
function Header() {
    const {isdarkmode,togglemode}=useTasks();
  return (
    <div className={` flex justify-between border-b-1 border-[#3C4043] ${isdarkmode?'bg-black text-white':'bg-white text-black'} p-4`}>
      <h1 className="text-5xl">
        Productivity Dashboard
      </h1>
      <button onClick={togglemode} className={`${isdarkmode?'bg-white text-black':'bg-[#3C4043] text-white'} hover:bg-green-400 shadow-xl p-4 rounded-full`}>
        
        {isdarkmode ? <Sun /> : <Moon />}</button>
    </div>
  );
}

export default Header;
