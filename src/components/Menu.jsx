// function Menu(){
//     return(
//         <div className={`flex flex-col bg-[#3C4043] gap-y-3 p-5 w-[20%]`}>
//             <h1 className="bg-gray-100 text-center">Tasks</h1>
//             <h1 className="text-center bg-gray-100">Notes</h1>
//         </div>
//     )
// }
// export default Menu;
import { Link } from 'react-router-dom';
import { useItems } from './ItemContext';

function Menu() {
    const {isSidebarOpen}=useItems();
    return (
        <div className={` ${isSidebarOpen?'hidden':' z-50 flex flex-col bg-[#3C4043] w-[40%] md:w-[20%] h-full items-center gap-8 fixed top-16 left-0'} `}>
            <Link to="/home" className="bg-gray-50 hover:bg-gray-300 hover:w-[90%] text-center text-sm mt-2 md:text-sm md:p-2 w-4/5  md:rounded-full">
                <h1>Home</h1>
            </Link>
            <Link to="/orders" className="bg-gray-50 hover:bg-gray-300 hover:w-[90%] text-center text-sm md:text-sm md:p-2 w-4/5  md:rounded-full">
                <h1>Orders</h1>
            </Link>
            <Link to="/account" className="bg-gray-50 hover:bg-gray-300 hover:w-[90%] text-center text-sm md:text-sm md:p-2 w-4/5  md:rounded-full">
                <h1>Account</h1>
            </Link>
            <Link to="/fetchedproducts" className="bg-gray-50 hover:bg-gray-300 hover:w-[90%] text-center text-sm md:text-sm md:p-2 w-4/5  md:rounded-full">
                <h1>API Products</h1>
            </Link>
        </div>
    );
}
export default Menu;