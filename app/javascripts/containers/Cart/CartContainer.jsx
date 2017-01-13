import React, { Component } from 'react'
import { connect }          from 'react-redux'
import List                 from '$components/List/List'

/**
 * Cart Container, loades Cart Page
 */
class CartContainer extends Component {
  /**
   * Update Cart on click of add to cart button
   * @param  {Event} event  Event
   */
  handleCartUpdate = (event) => {
    this.props.updateCart(event.target.dataset.id)
  }

  /**
   * Render Cart Page
   * @return {JSX} Rendered Cart
   */
  render() {
    const props = this.props
    const products = Object.keys(props.cart)

    return (
      <div>
        <List
          allProducts={props.allProducts}
          onAddToCart={this.handleCartUpdate}
          activeProducts={products}
        />
        <div className='loading'>{props.message}</div>
      </div>
    )
  }
}

/**
 * Avails State to render method
 * @param  {Object} options.cart  cart of State
 * @return {Object}               State fregment that is necessary to component
 */
function mapStateToProps({ cart, allProducts }) {
  return {
    cart,
    allProducts,
    message : Object.keys(cart).length === 0
      ? 'Cart is Empty.'
      : ''
  }
}

export default connect(mapStateToProps)(CartContainer)
