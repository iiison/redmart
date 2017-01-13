import React       from 'react'
import ProductUnit from '../Product/ProductUnit'
import * as styles from './styles.scss'

/**
 * Generate Products list
 * @param  {Object}   allProducts     All Products Hash
 * @param  {Array}    activeProducts  List of active products
 * @param  {Function} onAddToCart     List of active products
 * @return {JSX}                      Rendered List of active products
 */
const generateProductsList = (allProducts, activeProducts, onAddToCart) => (
  activeProducts.map((product) => (
    <li className={styles['prod-unit']} key={product}>
      <ProductUnit product={allProducts[product]} onAddToCart={onAddToCart} />
    </li>
  ))
)

/**
 * List Container component
 * @param  {Object}    allProducts     All Products Hash
 * @param  {Array}    activeProducts  List of active products
 * @param  {Function} onAddToCart     List of active products
 * @return {JSX}                      Rendered Unordered List of active products
 */
const List = ({ allProducts, activeProducts, onAddToCart }) => (
  <div>
    <ul>
      { generateProductsList(allProducts, activeProducts, onAddToCart) }
    </ul>
  </div>
)

export default List
