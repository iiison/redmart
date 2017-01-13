import React from 'react'

/**
 * Product Details Page Component
 * @param  {object} options.product  Product Details Object
 * @return {JSX}                     Rendered Product Details
 */
const Details = ({ product }) => (
  <div className='prod-details'>
    <h1>{product.name}</h1>
    <div className='prod-image'>
      <img src={`/assets/images/${product.image}`} alt={product.name} />
    </div>
    <div className='details'>
      <h2>{product.measurement}</h2>
      <h1>{`$${product.price}`}</h1>
      <p>{product.desc}</p>
      <div className='big-button'>{'add to cart'}</div>
    </div>
  </div>
)

export default Details
