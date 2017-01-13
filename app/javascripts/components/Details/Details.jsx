import React       from 'react'
import * as styles from './styles.scss'

/**
 * Product Details Page Component
 * @param  {object} options.product  Product Details Object
 * @return {JSX}                     Rendered Product Details
 */
const Details = ({ product, onCartUpdate }) => (
  <div className={styles['prod-details']}>
    <h1>{product.name}</h1>
    <div className={styles['prod-image']}>
      <img src={`/assets/images/${product.image}`} alt={product.name} />
    </div>
    <div className={styles.details}>
      <h2>{product.measurement}</h2>
      <h1>{`$${product.price}`}</h1>
      <p>{product.desc}</p>
      <div className='button' onClick={onCartUpdate} data-id={product.id}>{'add to cart'}</div>
    </div>
  </div>
)

export default Details
