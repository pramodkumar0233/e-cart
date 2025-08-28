import Body from "./Body";
import Menu from "./Menu";

function Main(){
    return(
        <div className="flex justify-between flex-grow">
            <Menu />
            <Body />
        </div>
    )
}
export default Main;