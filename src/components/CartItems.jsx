import { useItems } from "./ItemContext";
function CartItems(){
    const {cartitems,removefromcart}=useItems();
    const {isdarkmode,Backgroundcolor}=useItems();
    const handleremove=(item)=>{
        removefromcart(item);
    }
    return(
            <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 ${isdarkmode&&Backgroundcolor} w-full `} >
                {cartitems.length===0?<h1>CART IS EMPTY</h1>:
                
                cartitems.map((item)=>(
                <div key={item.id} className="hover:scale-103">
                    <div className="h-30 md:h-50">
                        {/* <img 
                            src={item.image} 
                            alt={item.title} className="w-full h-full rounded object-cover" /> */}
                    </div>
                    <div className="flex justify-between py-5 items-center">
                        <h3 className="font-bold truncate text-sm md:text-xl">{item.title}</h3>
                    {/* <p>{item.category}</p> */}
                    {/* <p>{item.description}</p> */}
                        <h4>${item.price}</h4>
                    </div>
                    <div className="w-full flex-grow justify-between">
                        <button className="w-full bg-yellow-300 rounded-full p-3 ">Buy Now</button>
                        <button onClick={()=>handleremove(item)} className="w-full border-1 rounded-full p-3 mt-1 ">Remove</button>
                    </div>
                </div>     
                ))}
            </div>
    )
}
export default CartItems;