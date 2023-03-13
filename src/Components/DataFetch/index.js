import {useState,useEffect} from 'react';
import axios from 'axios';
const DataFetch = () => {
const [data,setdata]=useState([])
useEffect(()=>{
       
    const getData=async()=>{
       
        try{
        const load = await axios.get(('https://gorest.co.in/public-api/users'));
        console.log(load)
        const statusCode = await load.statusCode
        console.log(statusCode)
        const finishdata = await load.data
        console.log(finishdata)
        const acutualData=finishdata.data
        console.log(acutualData)
        
        const newData = acutualData.map(eachItem => ({
          id: eachItem.id,
          name: eachItem.name,
          gender: eachItem.gender,
          email: eachItem.email,
          status: eachItem.status,
         
        }))
      
      
        setdata(newData)
        
    }catch(error){
        console.log(error)
    }
   
    }
    getData()
    
   
},[])


    return (
        <ul>
            {data.map(item=>(
                <li key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.email}</p>
                <p>{item.gender}</p>
                <p>{item.status}</p>
                </li>
            ))}
        </ul>
    );
};

export default DataFetch;