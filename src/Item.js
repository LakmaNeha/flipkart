import React from 'react'

export default function Item({productName,price,imgUrl}){
    
    return (
        <div className="item">
            {console.log(productName)}
                <p>{productName}</p>
                <img src={imgUrl} alt={productName}></img>
                <p>{price}</p>
                
        </div>
    )
}
