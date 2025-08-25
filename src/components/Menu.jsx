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

function Menu() {
    return (
        <div className="flex flex-col bg-[#3C4043] w-[20%] items-center gap-8 pt-2">
            <Link to="/tasks" className="bg-gray-50 hover:bg-gray-300 hover:w-[90%] text-center  p-2 w-4/5 rounded-full">
                <h1>Tasks</h1>
            </Link>
            <Link to="/notes" className="bg-gray-50 hover:bg-gray-300 hover:w-[90%] text-center p-2 w-4/5 rounded-full ">
                <h1>Notes</h1>
            </Link>
            <Link to="/reminders" className="bg-gray-50 hover:bg-gray-300 hover:w-[90%] text-center p-2 w-4/5 rounded-full">
                <h1>Reminders</h1>
            </Link>
        </div>
    );
}
export default Menu;