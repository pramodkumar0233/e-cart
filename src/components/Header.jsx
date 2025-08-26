import { useTasks } from "./TaskContext";
import { Sun, Moon, Bell, ShoppingCartIcon, Heart } from 'lucide-react';
function Header() {
    const {isdarkmode,togglemode}=useTasks();
  return (
    <div className={` flex justify-between items-center border-b-1 border-[#3C4043] ${isdarkmode?'bg-black text-white':'bg-white text-black'} p-4`}>
      <h1 className="text-5xl">
        FreeSales
      </h1>
      <div className="flex justify-between">
        <button onClick={togglemode} className={`${isdarkmode?'bg-white text-black':'bg-[#3C4043] text-white'} hover:shadow-xl p-1 m-3 rounded-full`}>
        
        <Bell /></button>
        <button onClick={togglemode} className={`${isdarkmode?'bg-white text-black':'bg-[#3C4043] text-white'} hover:shadow-xl p-1 m-3 rounded-full`}>
        
        <Heart /></button>
        <button onClick={togglemode} className={`${isdarkmode?'bg-white text-black':'bg-[#3C4043] text-white'} hover:shadow-xl p-1 m-3 rounded-full`}>
        
        <ShoppingCartIcon /></button>
        <button onClick={togglemode} className={`${isdarkmode?'bg-white text-black':'bg-[#3C4043] text-white'} hover:bg-green-400 shadow-xl p-1 m-3 rounded-full`}>
        
        {isdarkmode ? <Sun /> : <Moon />}</button>
      </div>
    </div>
  );
}

export default Header;
