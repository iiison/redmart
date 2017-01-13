import React       from 'react'
import { Link }    from 'react-router'
import * as styles from './styles.scss'

const ProductUnit = ({ product, onAddToCart }) => (
  <div>
    <div className={styles['img-cont']}>
      <img src={`/assets/images/${product.image}`} alt={product.name} />
    </div>
    <div className='details'>
      <p className={styles['prod-name']}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </p>
      <p className='centered'>{product.measurement}</p>
      <p className='bold top-margin'>{product.price}</p>
      <div className='button camels' onClick={onAddToCart} data-id={product.id}>{'add to card'}</div>
    </div>
  </div>
)

export default ProductUnit
