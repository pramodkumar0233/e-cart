import { useState } from "react";
import { useItems } from "./ItemContext";
import { Heart } from "lucide-react";
// import ListItem from "./ListItem";

function ItemList(){
    const {items}=useItems();
    const {isdarkmode,cartitems,likeditems}=useItems();
    const {addtocart,Backgroundcolor,addtofav}=useItems();

    // const [addedItems, setAddedItems] = useState([]);
    // const [likeditems, addlikeditems] = useState([]);

    const handleAddToCart = (item) => {
        addtocart(item);
        // Add the item's id to the addedItems state
        // setAddedItems(prevAddedItems => [...prevAddedItems, item.id]);
    };
    const handlelike=(item)=>{
        addtofav(item);
        // addlikeditems(prev=>[...prev,item.id]);

    }
    // const task=task;
    return(

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 ${isdarkmode&&Backgroundcolor} w-full `}>
                {items.map((item)=>(
                <div key={item.id} className="hover:scale-103 relative ">
                    <div className="h-30 lg:h-50">
                        <img 
                    src={item.image} 
                    alt={item.title} className="w-full h-full object-cover rounded-lg" loading="lazy"/>
                    <Heart size={32} color={likeditems.includes(item)?'red':'black'} fill={likeditems.includes(item)?'red':'none'} onClick={()=>handlelike(item)}
                        className={`absolute top-2 right-2 cursor-pointer hover:bg-gray-300 rounded-full p-1 `}
                        // onClick={() => handleFavorite(item.id)}
                    />
                    </div>
                    <div className="flex justify-between items-center py-5">
                        <h3 className="truncate md:text-lg">{item.title}</h3>
                    {/* <p>{item.category}</p> */}
                    {/* <p>{item.description}</p> */}
                    <h4>${item.price}</h4>
                    </div>
                        <button
                            className={`w-full mt-2 p-2 rounded-full font-bold truncate  
                                ${cartitems.includes(item) ? ' disabled:bg-yellow-200 disabled:cursor-not-allowed text-black' : 'cursor-pointer bg-yellow-300'}
                            `}
                            onClick={() => handleAddToCart(item)} disabled={cartitems.includes(item)}
                        >
                            {cartitems.includes(item) ? 'Added ' : 'Add to Cart'}
                        </button>
                    </div>
                ))}
        </div>
    )
}
export default ItemList;