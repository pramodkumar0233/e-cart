import { useItems } from "./ItemContext";
function LikedItems(){
    const {likeditems}=useItems();
    const {isdarkmode,Backgroundcolor}=useItems();
    return(
            <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 ${isdarkmode&&Backgroundcolor} w-full `} >
                {likeditems.length===0?<h1>NO FAV ITEMS</h1>:
                
                likeditems.map((item)=>(
                <div key={item.id} className="hover:scale-103">
                    <div className="h-30 md:h-50">
                        <img 
                            src={item.image} 
                            alt={item.title} className="w-full h-full rounded object-cover" />
                    </div>
                    <div className="flex justify-between py-5 items-center">
                        <h3 className="font-bold truncate text-sm md:text-xl">{item.title}</h3>
                    {/* <p>{item.category}</p> */}
                    {/* <p>{item.description}</p> */}
                        <h4>${item.price}</h4>
                    </div>
                    <div className="w-full flex-grow justify-between">
                        <button className="w-full bg-yellow-300 rounded-full p-3 ">Buy Now</button>
                        <button className="w-full border-1 rounded-full p-3 mt-1">Remove</button>
                    </div>
                </div>     
                ))}
            </div>
    )
}
export default LikedItems;