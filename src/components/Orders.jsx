import { orders } from "../dummy-data/dummyData";

function Orders() {
    const getformatdate=(dateString) => {
        const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(date);
return formattedDate;
    }
  return (
    <div className="p-4 w-full">
      {orders.length === 0 ? (
        <h1 className="text-center text-xl font-semibold">NO ORDERS</h1>
      ) : (
        orders.map((item) => (
          <div
            key={item.id}
            className="w-full mb-4 bg-gray-200 rounded-lg shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Image */}
            <div className="flex items-center justify-center md:w-1/4">
              <img
                src={item.image}
                alt={item.name}
                className="h-32 w-32 object-contain rounded-md"
              />
            </div>

            {/* Order Info */}
            <div className="flex-1">
              <h1 className="font-semibold text-lg">{item.name}</h1>
              <p className="text-gray-700">₹{item.price}</p>
              <p className="text-sm text-gray-600">Status: {item.status}</p>
            </div>

            {/* Payment + Dates */}
            <div className="flex flex-col text-sm text-gray-700 md:w-1/4">
              <p>Ordered: {getformatdate(item.orderedAt)}</p>
              <p>Payment: {item.paymentMethod}</p>
              <p>Status: {item.paymentStatus}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
