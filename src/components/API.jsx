import { useEffect, useState } from "react";
import { useItems } from "./ItemContext";
function API(){
    const [data,setdata]=useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setdata(data))
        .catch(err=>console.log(err))
    },[]);
    
    return(
        <div className="grid grid-cols-2">
            {/* <h1 className="bg-red-400">hello there API!!</h1> */}
            {data.map((item)=>(
                            <div key={item.id} className="flex flex-col bg-red-200 m-2 rounded-lg ">
                                <div className="bg-white h-40 rounded-lg">
                                    <img src={item.image} alt={item.category} className="h-full w-full object-contain  rounded-lg" />
                                </div>
                                <div className="flex justify-between p-2 gap-5">
                                    <p className="truncate">{item.title}</p>
                                    <p>₹{item.price}</p>
                                </div>

                                
                                {/* <h1 className="">{item.description}</h1> */}
                            </div> 
                ))}
        </div>
    )

}
export default API;