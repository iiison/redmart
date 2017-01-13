/**
 * Add All Filters, To track filter names.
 * Will be executed only once at page load.
 * @param  {Array}   allFilters       Array of name of filters.
 * @param  {Object}  detailedFilters  Filters Hash.
 * @return {Object}                   Action
 */
export function addAllFilters(allFilters, detailedFilters) {
  return {
    type : 'ADD_ALL_FILTERS',
    allFilters,
    detailedFilters
  }
}

/**
 * Will Update filter, will be executed when filters are being
 * applied or removed
 * @param  {String} filterName   Name of filter to be added or removed
 * @param  {String} filterValue  Value of filter to be added or removed
 * @param  {String} flag         Wheter to add or remove the fitler
 *                               Possible values are 'add'/'remove'
 * @return {[type]}              Action
 */
export function updateFilter(filterName, filterValue, flag) {
  return {
    type : 'UPDATE_FILTER',
    filterName,
    filterValue,
    flag
  }
}

const initialState = {
  all    : [],
  active : {
    price : [],
    brand : []
  }
}

/**
 * Helper Reducer : Updates `active` part of `filter`
 * @param  {Objet}  state   `active` part of `filter`
 * @param  {Object} action  action
 * @return {Object}         Updated state
 */
function updateActiveFilters(state = initialState.active, action) {
  switch (action.type) {
  case 'UPDATE_FILTER':
    const index = state[action.filterName].indexOf(action.filterValue)

    return {
      ...state,
      [action.filterName] : action.flag === 'add'
        ? state[action.filterName].concat(action.filterValue)
        : state[action.filterName].slice(0, index).concat(state[action.filterName].slice(index + 1))
    }

  default:
    return state
  }
}

/**
 * Reducer: Updates `filter` part of main state.
 * @param  {Object} state   `filter` part of state
 * @param  {Object} action   Action
 * @return {Object}         Updated state.
 */
export default function filter(state = initialState, action) {
  switch (action.type) {
  case 'ADD_ALL_FILTERS':
    return {
      ...state,
      all      : action.allFilters,
      detailed : action.detailedFilters
    }

  case 'UPDATE_FILTER':
    return {
      ...state,
      active : updateActiveFilters(state.active, action)
    }

  default:
    return state
  }
}
