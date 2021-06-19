import React from 'react'
import SearchIcon from "@material-ui/icons/Search";

export default function Navbar() {
    return (
        <div className="navbar">
            <h3 className="title">Flipkart</h3>
            <div className="searchComponent">
                <input type="search" placeholder="search for products, brands and more"></input>
                
                <SearchIcon
                  className="icon"
                  style={{ fontSize: 30 }}
                />
            </div>
            
            <button className="login">Login</button>
            
        </div>
    )
}
