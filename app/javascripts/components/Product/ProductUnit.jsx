import React    from 'react'
import { Link } from 'react-router'

const ProductUnit = ({ product }) => (
  <div className='prodUnit'>
    <div className='img-cont'>
      <img src={`/assets/images/${product.image}`} alt={product.name} />
    </div>
    <div className='details'>
      <p className='text'>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </p>
      <p className='centered'>{product.measurement}</p>
      <p className='bold top-margin'>{product.price}</p>
      <div className='button camels'>{'add to card'}</div>
    </div>
  </div>
)

export default ProductUnit
