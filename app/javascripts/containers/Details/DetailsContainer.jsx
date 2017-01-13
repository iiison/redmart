import React, { Component }          from 'react'
import { connect }                   from 'react-redux'
import { bindActionCreators }        from 'redux'
import Details                       from '$components/Details/Details'
import { updateCart }                from '$redux/cart'
import * as productListActionCreator from '$redux/products'

/**
 * Details Container, loades Product Details Page
 */
class DetailsContainer extends Component {
  /**
   * Update Cart on click of add to cart button
   * @param  {Event} event [description]
   */
  handleCartUpdate = (event) => {
    this.props.updateCart(event.target.dataset.id)
  }

  /**
   * React Lifecycle Event: Renders List Page View
   * @return {JSX}  Calls List Component to Render the page
   */
  render() {
    if (Object.keys(this.props.allProducts).length === 0) {
      return (
        <div className='loading'>{'Loading...'}</div>
      )
    }

    return (
      <Details
        product={this.props.allProducts[this.props.params.id]}
        onCartUpdate={this.handleCartUpdate}
      />
    )
  }

  /**
   * React Lifecycle Event: Runs only once, will be triggered when component is rendered.
   * will be used to fetch and format the products.
   */
  componentDidMount() {
    if (Object.keys(this.props.allProducts).length === 0) {
      this.props.setupProducts()
    }
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

/**
 * Maps dispatch and action ceators to render method
 * @param  {function} dispatch - store's dispatch method
 * @return {object}            - action creators in object
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...productListActionCreator,
    updateCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
