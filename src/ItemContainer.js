import React,{useEffect,useState} from 'react'
import Sidebar from './Sidebar';

export default function ItemContainer() {
    const [data,setData]=useState([]);
    const  [copyOfData,setCopyOfData] = useState([])

    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            setData(myJson)
            setCopyOfData(myJson)
            console.log(myJson);
            
          });
      }
      useEffect(()=>{
        getData()
     
      },[])
      
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>
            <Sidebar style={{width: "20%"}}  setCopyOfData={setCopyOfData} copyOfData={copyOfData} data={data} setData={setData}/>
       
        <div style={{width: "80%"}} className="itemContainer">
             {
               data && data.length>0 && data.map((item)=>
               <div className="item" key={item.key}>
                
                <img src={item.imgUrl} alt={item.productName}></img>
                <p style={{fontWeight: "bold"}}>{item.brand}</p>
                <p>{item.productName}</p>
                <p style={{fontWeight: "bold"}}>₹{item.price}</p>
                <p >{item.size}</p>
                </div>
                )
             }
        </div>
        </div>
    )
}
