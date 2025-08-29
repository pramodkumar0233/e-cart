import Body from "./Body";
import Menu from "./Menu";
import { useItems } from "./ItemContext";

function Main(){
    const{Backgroundcolor,isdarkmode}=useItems();
    return(
        <div className={`flex justify-between ${isdarkmode&&Backgroundcolor} h-full`}>
            <Menu />
            <Body />
        </div>
    )
}
export default Main;