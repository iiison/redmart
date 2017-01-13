import React, { Component } from 'react'
import { connect }          from 'react-redux'
import Details              from '$components/Details/Details'

/**
 * Details Container, loades Product Details Page
 */
class DetailsContainer extends Component {
  /**
   * React Lifecycle Event: Renders List Page View
   * @return {JSX}  Calls List Component to Render the page
   */
  render() {
    return <Details product={this.props.allProducts[this.props.params.id]} />
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

export default connect(mapStateToProps)(DetailsContainer)
