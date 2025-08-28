// TaskContext.js
import { createContext, useContext, useEffect, useState } from "react";
// import { products } from "./products";

const ItemContext = createContext(); // the "box"

export function ItemProvider({ children }) {
  const [items, addItems] = useState([]);
  const [isdarkmode, setmode]=useState(false);
  // const [cartitems,setaddtocart]=useState([]);
  // const [favitems,setfavitems]=useState([]);
  const [cartitems, setAddedItems] = useState([]);
  const [likeditems, addlikeditems] = useState([]);
  const Backgroundcolor="bg-gray-500 text-black"

  useEffect(()=>{
    fetch('./products.json')
    .then((res)=>res.json())
    .then((data)=>addItems(data))
    .catch(err=>console.log(err))
  },[]);

  // functions for managing tasks
  const togglemode=()=>setmode(prevmode=>!prevmode);

  const addtocart=(item)=>{
    setAddedItems(cartitems=>[item,...cartitems]);
    console.log("ADDED TO CART",item);
  }
   const addtofav=(item)=>{
    addlikeditems(likeditems=>[item,...likeditems]);
    console.log("ADDED TO FAV",item);
   }
  

  // put everything into the "box"
  return (
    <ItemContext.Provider value={{items,
    likeditems,togglemode,isdarkmode,cartitems,addtocart, Backgroundcolor,addtofav }}>
      {children}
    </ItemContext.Provider>
  );
}

// helper function so components can use the box
export function useItems() {
  return useContext(ItemContext);
}
