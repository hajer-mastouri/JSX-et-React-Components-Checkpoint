import React from 'react'
import product from './Product'

export default function Image() {
  return (

    <div className="product-image">
      <img src={product.image}  alt={product.name} style={{ maxWidth: "150px", height: "auto" }}/>
    </div>
  )
}