import React, { Component } from 'react'
import { connect }             from 'react-redux'
import Cart from '$components/Cart/Cart'

/**
 * Cart Container, loades Cart Page
 */
class CartContainer extends Component {
  /**
   * Render Cart Page
   * @return {JSX} Rendered Cart
   */
  render() {
    return <Cart />
  }
}

/**
 * Avails State to render method
 * @param  {Object} options.allProducts  allProducts of State
 * @return {Object}                      State fregment that is necessary to component
 */
function mapStateToProps({ allProducts }) {
  return {
    allProducts
  }
}

export default connect(mapStateToProps)(CartContainer)
