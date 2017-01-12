import React, { Component }          from 'react'
import List                          from '$components/List/List'
import { bindActionCreators }        from 'redux'
import { connect }                   from 'react-redux'
import * as productListActionCreator from '$redux/products'

/**
 * List Page container, loads at `/` route.
 */
class ListContainer extends Component {
  /**
   * React Lifecycle Event: Renders List Page View
   * @return {JSX}  Calls List Component to Render the page
   */
  render() {
    return (
      <List />
    )
  }

  /**
   * React Lifecycle Event: Runs only once, will be triggered when component is rendered.
   * will be used to fetch and format the products.
   */
  componentDidMount() {
    const props = this.props
    const params = props.params

    this.props.getProducts()
  }
}

/**
 * Maps dispatch and action ceators to render method
 * @param  {function} dispatch - store's dispatch method
 * @return {object}            - action creators in object
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(productListActionCreator, dispatch)
}

/**
 * Avails State to render method
 * @param  {Object}  state  - Full State.
 * @return {Object}         - State fregment that is necessary to component.
 */
function mapStateToProps({ allProducts }) {
  return allProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
