import React from 'react'
// import product4 from './images/product4.jpg'

const ProductUnit = ({ product }) => (
  <div className='prodUnit'>
    <div className='img-cont'>
      <img src={`/assets/images/${product.image}`} alt={product.name} />
    </div>
    <div className='details'>
      <p className='text'>{product.name}</p>
      <p className='centered'>{product.measurement}</p>
      <p className='bold top-margin'>{product.price}</p>
      <div className='button camels'>{'add to card'}</div>
    </div>
  </div>
)

export default ProductUnit
