import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useItems } from "./ItemContext";
import { Sun, Moon, Bell, ShoppingCartIcon, Heart, Menu, X } from 'lucide-react';
import Notifications from "./Notifications";
import Modal from "./UI/Model";

function Header() {
  const navigate=useNavigate();
  const { isdarkmode, togglemode, Backgroundcolor, isSidebarOpen, setSidebarOpen } = useItems();
  const [isNotifOpen, setNotifOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const gotocart=()=>{ navigate("/cart") }
  const gotoliked=()=>{ navigate('/favourites') }

  return (
    <div className={`flex justify-between fixed z-50 top-0 left-0 shadow-md bg-[#3C4043] text-white w-full items-center border-b border-[#3C4043] ${isdarkmode && Backgroundcolor}`}>
      <div className="flex items-center justify-between w-[40%] md:w-[20%] ">
        <h1 className="hidden md:block md:text-5xl">E-Cart</h1>
        <button type="button" onClick={handleSidebar}>
          {isSidebarOpen ? <Menu size={28} /> : <X size={28} />}
        </button>
      </div>

      <div className="flex justify-between">
        {/* Notifications */}
        <button
          onClick={() => setNotifOpen(true)}
          className={`${isdarkmode ? "text-white hover:bg-gray-100" : ""} hover:shadow-xl hover:cursor-pointer hover:bg-gray-300 p-2 m-1 md:m-3 rounded-full`}
        >
          <Bell />
        </button>

        <button onClick={gotoliked} className={`${isdarkmode ? "text-white hover:bg-gray-100" : ""} hover:shadow-xl hover:cursor-pointer hover:bg-gray-300 p-2 m-1 md:m-3 rounded-full`}>
          <Heart />
        </button>
        <button onClick={gotocart} className={`${isdarkmode ? "text-white hover:bg-gray-100" : ""} hover:shadow-xl hover:cursor-pointer hover:bg-gray-300 p-2 m-1 md:m-3 rounded-full`}>
          <ShoppingCartIcon />
        </button>

        <button onClick={togglemode} className={`${isdarkmode ? " text-black" : " text-white"} hover:cursor-pointer p-2 m-1 md:m-3 rounded-full`}>
          {isdarkmode ? <Sun fill="orange" color="orange" /> : <Moon fill="white" />}
        </button>
      </div>

      {/* Notifications Modal */}
      <Modal isOpen={isNotifOpen} onClose={() => setNotifOpen(false)}>
        <Notifications />
      </Modal>
    </div>
  );
}

export default Header;
