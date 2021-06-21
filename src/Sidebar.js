import React, { useState } from "react";

export default function Sidebar({ copyOfData,data, setData }) {
  
  const [gender, setGender] = useState(null);
  const [size, setSize] = useState([]);
  const [brand, setBrand] = useState([]);

  const setLowHigh = () => {
    setData([...data].sort((a, b) => a.price - b.price));
  };

  const setHighLow  = () => {
    setData([...data].sort((a, b) => b.price - a.price));
  };

 

 const idealFor = (e) => {
  
  setGender(e.target.value)
  setData(copyOfData.filter((item)=> item.gender===e.target.value))
  }
   


 const getBrands = (e)=>{
  setBrand([...brand, e.target.value]);

    if(e.target.checked){
      setData(copyOfData.filter((item)=> [...brand, e.target.value].includes(item.brand)))
      
    }
    else{
      if(brand.includes(e.target.value)){
        const  updatedBrand = brand.filter((item) => item !== e.target.value)
        console.log(updatedBrand)
        setData(copyOfData.filter((item)=> updatedBrand.includes(item.brand)))
      }
    }
 }

 const getSize = (e)=>{
 

    if(e.target.checked){
      setData(copyOfData.filter((item)=> [...size, e.target.value].includes(...item.size)))
      
    }
    else{
      if(size.includes(e.target.value)){
        const  updatedSize = size.filter((item) => item !== e.target.value)
        console.log(updatedSize)
        setData(copyOfData.filter((item)=> updatedSize.includes(item.size)))
      }
    }
 }
 const clearFilters = () =>{
  setData(copyOfData)
 }
 console.log(gender)

  return (
    <div className="sidebar">
      <div className="sort">
        <div>
          <label style={{ fontWeight: "bold" }}>Sort by</label>
        </div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <button onClick={setHighLow}>high to low</button>
          </li>
          <li>
            <button onClick={setLowHigh}>low to high</button>
          </li>
        </ul>
      </div>

      <div className="gender">
        <label style={{ fontWeight: "bold" }}>Ideal For </label>
        <ul style={{ listStyle: "none" }}>
          <li>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(e)=>idealFor(e)}
            ></input>
            <label>Male</label>
          </li>
          <li>
            
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(e)=>idealFor(e)}
            ></input>
            <label>Female</label>
          </li>
        </ul>
      </div>

      <div className="size">
        <label style={{ fontWeight: "bold" }}>Size</label>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <input
                type="checkbox"
                value="XS"
                onChange={(e) => {setSize([...size, e.target.value]);getSize(e)}}
              ></input>
              <label>XS</label>
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                value="S"
                onChange={(e) => {setSize([...size, e.target.value]);getSize(e)}}
              ></input>
              <label>S</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="M"
                onChange={(e) => {setSize([...size, e.target.value]);getSize(e)}}
              ></input>
              <label>M</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="L"
                onChange={(e) => {setSize([...size, e.target.value]);getSize(e)}}
              ></input>
              <label>L</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="XL"
                onChange={(e) => {setSize([...size, e.target.value]);getSize(e)}}
              ></input>
              <label>XL</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="XXL"
                onChange={(e) => {setSize([...size, e.target.value]);getSize(e)}}
              ></input>
              <label>XXL</label>
            </li>
          </ul>
        </div>
      </div>

      <div className="brands">
        <label style={{ fontWeight: "bold" }}>Brands</label>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <input
                type="checkbox"
                value="highlander"
                onChange={(e) => {getBrands(e)}}
              ></input>
              <label>highlander</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="U.S. POLO ASSN."
                onChange={(e) => {getBrands(e)}}
              ></input>
              <label>U.S. POLO ASSN.</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="adidas"
                onChange={(e) => {getBrands(e)}}
              ></input>
              <label>adidas</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="aurelia"
                onChange={(e) => {getBrands(e)}}
              ></input>
              <label>aurelia</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="only"
                onChange={(e) => {getBrands(e)}}
              ></input>
              <label>only</label>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={clearFilters}>Clear all</button>
    </div>
  );
}
/*{setBrand([...brand, e.target.value]);getBrands()}*/