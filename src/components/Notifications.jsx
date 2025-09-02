import { notifications } from "../dummy-data/dummyData";

const Notifications = () => {
    return (
        <div className="mt-4" >
            {notifications.map((item) => (
                <div key={item.id} className=" text-black m-3 shadow-xl p-4 border-1 rounded-2xl">
                    <div className="text-left">
                        <span className="bg-blue-500 p-2 border-1 rounded-3xl   bg-gradient-to-r from-blue-500 to-purple-500">#{item.type}</span>
                    </div>
                    <div className="mt-2">
                        <h1>{item.message}</h1>
                    </div>
                    <div className="flex justify-end">
                        <h1>{item.time}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Notifications;