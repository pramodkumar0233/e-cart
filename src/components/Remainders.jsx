import ProductList from "./ProductList";
import { useTasks } from "./TaskContext";
function Remainders(){
    const {isdarkmode} =useTasks(); 
        return(
            <div className={` ${isdarkmode?'bg-black text-white':'bg-white text-black'} text-center text-4xl flex flex-col flex-grow `}>
                <ProductList />
            </div>
        )
}
export default Remainders;