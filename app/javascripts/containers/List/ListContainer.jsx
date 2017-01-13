import React, { Component }          from 'react'
import List                          from '$components/List/List'
import Filters                       from '$components/Filters/Filters'
import { bindActionCreators }        from 'redux'
import { connect }                   from 'react-redux'
import * as productListActionCreator from '$redux/products'
import { updateFilter }              from '$redux/filter'
import { updateActiveProducts }      from '$redux/activeProducts'
import * as helpers                  from '$utils/helpers'

/**
 * List Page container, loads at `/` route.
 */
class ListContainer extends Component {
  /**
   * Gropus Product ID according to filters
   * @param  {String} filterName   recent applied filter name
   * @param  {String} filterValue  recent applied filter value
   * @param  {String} flag         whether filter is removed or added
   * @return {Object}              Grouped Product ID's accrding to filters,
   *                               value will be null if no filter selected
   */
  getCategoryProducts = (filterName, filterValue, flag) => {
    const products = {}
    const activeFilters = this.props.filter.active
    let isFilterApplied = false

    if (flag === 'add') {
      activeFilters[filterName].push(filterValue)
      isFilterApplied = true
    } else if (flag === 'remove') {
      activeFilters[filterName].splice(activeFilters[filterName].indexOf(filterValue), 1)
    }

    for (const filter in activeFilters) {
      products[filter] = []
      for (const activeFilter in activeFilters[filter]) {
        products[filter] = products[filter].concat(this.props[`by${helpers.toTitleCase(filter)}`][activeFilters[filter][activeFilter]])
      }

      isFilterApplied = (isFilterApplied || products[filter].length > 0)
    }

    return isFilterApplied === true ? products : null
  }

  /**
   * `onClick` event listener for filter selectbox
   * @param  {Event} event  Event
   */
  handleFilterValueChange = (event) => {
    const elemRef = event.target
    const props   = this.props
    let productsByFilter

    if (elemRef.checked === true) {
      props.updateFilter(elemRef.dataset.filter, elemRef.value, 'add')
      productsByFilter = this.getCategoryProducts(elemRef.dataset.filter, elemRef.value, 'add')
    } else {
      productsByFilter = this.getCategoryProducts(elemRef.dataset.filter, elemRef.value, 'remove')
      props.updateFilter(elemRef.dataset.filter, elemRef.value, 'remove')
    }

    props.updateActiveProducts(
      (productsByFilter !== null)
        ? helpers.getIntersaction(productsByFilter.brand, productsByFilter.price)
        : Object.keys(this.props.allProducts)
    )
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
  return bindActionCreators({ ...productListActionCreator, updateFilter, updateActiveProducts }, dispatch)
}

/**
 * Avails State to render method
 * @param  {Object}  state  - Full State.
 * @return {Object}         - State fregment that is necessary to component.
 */
function mapStateToProps({ allProducts, activeProducts, filter, byPrice, byBrand }) {
  return {
    allProducts,
    activeProducts,
    filter,
    byPrice,
    byBrand
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
