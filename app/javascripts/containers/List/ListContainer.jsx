import React, { Component }          from 'react'
import List                          from '$components/List/List'
import Filters                       from '$components/Filters/Filters'
import { bindActionCreators }        from 'redux'
import { connect }                   from 'react-redux'
import * as productListActionCreator from '$redux/products'
import { updateFilter }              from '$redux/filter'

/**
 * List Page container, loads at `/` route.
 */
class ListContainer extends Component {
  /**
   * `onClick` event listener for filter selectbox
   * @param  {Event} event  Event
   */
  handleFilterValueChange = (event) => {
    const elemRef = event.target

    this.props.updateFilter(elemRef.dataset.filter, elemRef.value, 'add')
  }

  /**
   * React Lifecycle Event: Renders List Page View
   * @return {JSX}  Calls List Component to Render the page
   */
  render() {
    const props = this.props
    const list = Object.keys(props.allProducts).length === 0
      ? <p>{'Loading...'}</p>
      : (
        <div>
          <Filters
            activeFilters={props.filter.active}
            detailedFilters={props.filter.detailed}
            onValueChnage={this.handleFilterValueChange}
          />
          <List allProducts={props.allProducts} activeProducts={props.activeProducts} />
        </div>
      )

    return list
  }

  /**
   * React Lifecycle Event: Runs only once, will be triggered when component is rendered.
   * will be used to fetch and format the products.
   */
  componentDidMount() {
    this.props.setupProducts()
  }
}

/**
 * Maps dispatch and action ceators to render method
 * @param  {function} dispatch - store's dispatch method
 * @return {object}            - action creators in object
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...productListActionCreator, updateFilter }, dispatch)
}

/**
 * Avails State to render method
 * @param  {Object}  state  - Full State.
 * @return {Object}         - State fregment that is necessary to component.
 */
function mapStateToProps({ allProducts, activeProducts, filter }) {
  return {
    allProducts,
    activeProducts,
    filter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
