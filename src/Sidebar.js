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
  if(gender){ 
    console.log(gender)
    setData(copyOfData.filter((item)=> item.gender===gender))
  }
   
 }

 const getBrands = ()=>{
    if(brand.length>0){
      setData(copyOfData.filter((item)=> brand.includes(item.brand)))
    }
 }

 const getSize =()=>{
  if(size.length>0){
    console.log(size)
    setData(copyOfData.filter((item)=> size.includes(...item.size)))
  }
 }
 

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
              onChange={idealFor}
            ></input>
            <label>Male</label>
          </li>
          <li>
            
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={idealFor}
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
                onChange={(e) => {setSize([...size, e.target.value]);getSize()}}
              ></input>
              <label>XS</label>
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                value="S"
                onChange={(e) => {setSize([...size, e.target.value]);getSize()}}
              ></input>
              <label>S</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="M"
                onChange={(e) => {setSize([...size, e.target.value]);getSize()}}
              ></input>
              <label>M</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="L"
                onChange={(e) => {setSize([...size, e.target.value]);getSize()}}
              ></input>
              <label>L</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="XL"
                onChange={(e) => {setSize([...size, e.target.value]);getSize()}}
              ></input>
              <label>XL</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="XXL"
                onChange={(e) => {setSize([...size, e.target.value]);getSize()}}
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
                onChange={(e) => {setBrand([...brand, e.target.value]);getBrands()}}
              ></input>
              <label>highlander</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="U.S. POLO ASSN."
                onChange={(e) => {setBrand([...brand, e.target.value]);getBrands()}}
              ></input>
              <label>U.S. POLO ASSN.</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="adidas"
                onChange={(e) => {setBrand([...brand, e.target.value]);getBrands()}}
              ></input>
              <label>adidas</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="aurelia"
                onChange={(e) => {setBrand([...brand, e.target.value]);getBrands()}}
              ></input>
              <label>aurelia</label>
            </li>
            <li>
              <input
                type="checkbox"
                value="only"
                onChange={(e) => {setBrand([...brand, e.target.value]);getBrands()}}
              ></input>
              <label>only</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
