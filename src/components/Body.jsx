// src/components/Body.jsx
import { Routes,Route } from "react-router-dom"; // Note: HashRouter has been removed
// import { useEffect } from "react";
// import ItemList from "./ItemList";
// import Remainders from "./Remainders";
import { useItems } from "./ItemContext";
import ItemList from "./ItemList";
import CartItems from "./CartItems";
import API from "./API";
import Orders from "./Orders";
import LikedItems from "./LikedItems";
import ProductList from "./ProductList";
import Notifications from "./Notifications"

function Body(){
    
    const {Backgroundcolor}=useItems();
    const {isdarkmode,isSidebarOpen}=useItems();
    // const {items}=useItems();
    return(
        <div className={` flex flex-grow min-h-screen ${isdarkmode&&Backgroundcolor} w-full text-center ${isSidebarOpen?'ml-0 ':'md:ml-78'} mt-20 h-full  `}>
         
            <Routes>
                <Route path="/" element={
                    <>
                        {/* <h1 className="text-red-500">{items[0].title}</h1>
                        <img src={items[0].image}/> */}
                        <ItemList />
                    </>
                } />
                <Route path="/home" element={
                    <>
                        {/* <ItemList /> */}
                        {/* <h1 className="text-blue-500">hello</h1> */}
                        <ItemList />
                    </>
                } />
                <Route path="/cart" element={<>
                <CartItems />
                </>} />
                <Route path="/fetchedproducts" element={<API />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/favourites" element={<LikedItems />} />
                <Route path="/account" element={<ProductList />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
            
        </div>
    )
}
export default Body;