import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card';



const App = () => {

  const [data, setData]=  useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError]= useState(null)


  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users");


          
          const json = await response.json();

          if (!response.ok) {
          throw new Error("Failed to fetch data");
          
        }

        setData(json);

       
        
      }
      catch(err){
         setError(err.message);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  }, [])


   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
   <>
   {data.map((dataa)=>(
    <div>
      <Card name={dataa.name} email={dataa.email}/>
    </div>
   ))}
   </>
  )
}

export default App