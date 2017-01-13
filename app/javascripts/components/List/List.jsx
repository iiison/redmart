import React from 'react'
import ProductUnit from '../Product/ProductUnit'

/**
 * Generate Products list
 * @param  {Object} allProducts     All Products Hash
 * @param  {Array}  activeProducts  List of active products
 * @return {JSX}                    Rendered List of active products
 */
function generateProductsList(allProducts, activeProducts) {
  return activeProducts.map((product) => (
    <li key={product}>
      <ProductUnit product={allProducts[product]} />
    </li>
  ))
}

/**
 * List Container component
 * @param  {Object} allProducts     All Products Hash
 * @param  {Array}  activeProducts  List of active products
 * @return {JSX}                    Rendered Unordered List of active products
 */
const List = ({ allProducts, activeProducts }) => (
  <div>
    <ul>
      { generateProductsList(allProducts, activeProducts) }
    </ul>
  </div>
)

export default List
