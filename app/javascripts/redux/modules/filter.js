/**
 * Add All Filters, To track filter names.
 * Will be executed only once at page load.
 * @param  {Array}  allFilters  Array of name of filters.
 * @return {Object}             Action
 */
export function addAllFilters(allFilters) {
  return {
    type : 'ADD_ALL_FILTERS',
    allFilters
  }
}

/**
 * Will Update filter, will be executed when filters are being
 * applied or removed
 * @param  {String} filterName  Name of filter to be added or removed
 * @param  {String} flag        Wheter to add or remove the fitler
 *                              Possible values are 'add'/'remove'
 * @return {[type]}            Action
 */
export function updateFilters(filterName, flag) {
  return {
    type : 'UPDATE_FILTER',
    filterName,
    flag
  }
}

/**
 * Reducer: Updates `filter` part of main state.
 * @param  {Object} state   `filter` part of state
 * @param  {Object} action   Action
 * @return {Object}         Updated state.
 */
export default function filter(state = {}, action) {
  switch (action.type) {
  case 'ADD_ALL_FILTERS':
    return {
      ...state,
      all : action.allFilters
    }

  case 'UPDATE_FILTER':
    return {
      ...state,
      active : []
    }

  default:
    return state
  }
}
