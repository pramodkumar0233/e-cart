// import { useState } from "react";
import { Routes,Route } from "react-router-dom";
// import { useEffect } from "react";
// import ItemList from "./ItemList";
// import Remainders from "./Remainders";
import { useItems } from "./ItemContext";
import ItemList from "./ItemList";
import CartItems from "./CartItems";
import API from "./API";
import Orders from "./Orders";
import LikedItems from "./LikedItems";

function Body(){
    
    const {Backgroundcolor}=useItems();
    const {isdarkmode}=useItems();
    // const {items}=useItems();
    return(
        <div className={`w-[80%] ${isdarkmode&&Backgroundcolor} text-center  `}>
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
            </Routes>
        </div>
    )
}
export default Body;