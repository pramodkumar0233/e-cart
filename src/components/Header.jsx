import { Link ,Navigate,useNavigate} from "react-router-dom";
import { useItems } from "./ItemContext";
// import CartItems from "./CartItems";
import { Sun, Moon, Bell, ShoppingCartIcon, Heart, } from 'lucide-react';
function Header() {
  const navigate=useNavigate();
    const {isdarkmode,togglemode,Backgroundcolor}=useItems();
    const gotocart=()=>{
      navigate("/cart")
    }
    const gotoliked=()=>{
      navigate('/favourites')
    }
    // const {addtocart}=useItems();
  return (
    <div className={` flex justify-between items-center border-b-1 border-[#3C4043] ${isdarkmode&&Backgroundcolor} p-4`}>
      <h1 className="text-sm md:text-5xl">
        FreeSales
      </h1>
      <div className="flex justify-between">
        <button onClick={togglemode} className={`${isdarkmode?' text-white hover:bg-gray-100':'text-black'} hover:shadow-xl hover:cursor-pointer hover:bg-gray-300 p-2 m-3 rounded-full`}>
        
        <Bell /></button>
        <button onClick={gotoliked} className={`${isdarkmode?'text-white hover:bg-gray-100':'text-black'} hover:shadow-xl hover:cursor-pointer hover:bg-gray-300 p-2 m-3 rounded-full`}>
        
        <Heart /></button>
        <button onClick={gotocart} className={`${isdarkmode?'text-white hover:bg-gray-100':'text-black'} hover:shadow-xl hover:cursor-pointer hover:bg-gray-300 p-2 m-3 rounded-full`}>
        
        <ShoppingCartIcon /></button>
        <button onClick={togglemode} className={`${isdarkmode?' text-black':'bg-black text-white'} hover:cursor-pointer shadow-xl p-2 m-3 rounded-full`}>
        {/* <SunIcon /> */}
        
        {isdarkmode ? <Sun fill="orange" color="orange"/> : <Moon fill="white"/>}
        </button>
      </div>
    </div>
  );
}

export default Header;
