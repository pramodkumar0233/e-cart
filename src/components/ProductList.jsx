import { useState, useEffect } from "react";

function ProductList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page,setpage]=useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=5&_page=${page}`);
        
        // Check for HTTP errors (e.g., 404, 500)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [page]); // Empty dependency array ensures this runs only once

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col flex-grow bg-gray-200 text-center items-center min-h-screen ">
      <h1>LIST</h1>
      
      {/* Example of rendering fetched data */}
      <ul>
        {data.map(item => (
          <div key={item.id}>
            <li >{item.title}</li>
          <br />
          </div>
        ))}
      </ul>
      <div className="flex gap-5">
        <button className="bg-gray-500 text-white p-5 disabled:opacity-50"
      onClick={()=>setpage(prev=>{
        if(prev===1){
         return prev} else {return prev-1}}) }disabled={page===1}
      >Prev</button>
      <button className="bg-gray-500 text-white p-5"
      onClick={()=>setpage(prev=>prev+1)}
      >Next</button>
      </div>
      
    </div>
  );
}
export default ProductList;