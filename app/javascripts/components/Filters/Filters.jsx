import React from 'react'

/**
 * Generate Check box options for filters
 * @param  {Array}    options        List of all options to be shown for one checkbox group
 * @param  {Object}   activeFilters  Active Filters Hash
 * @param  {Function} onValueChnage  Event Listener on checkbox on change
 * @param  {String}   filterName     Name of filter to track the value
 * @return {JSX}                     Rendered checkbox group
 */
function generateFilterOptions(options, activeFilters, onValueChnage, filterName) {
  return options.map((option) => (
    <div key={option}>
      <label>
        <input
          type='checkbox'
          value={option}
          checked={activeFilters.indexOf(option) >= 0}
          onClick={onValueChnage}
          data-filter={filterName}
        />
        <span>{option}</span>
      </label>
    </div>
  ))
}

/**
 * Map and Render Filters
 * @param  {Object}   activeFilters    Active Filters Hash
 * @param  {Object}   detailedFilters  Filters Hash.
 * @param  {Function} onValueChnage    Event Listener on checkbox on change
 * @return {JSX}                       Rendered Filters
 */
function makeFilters(activeFilters, detailedFilters, onValueChnage) {
  const filters = Object.keys(detailedFilters)

  return filters.map((filter) => (
    <div className='filter-unit' key={filter}>
      <h2>{filter}</h2>
      { generateFilterOptions(detailedFilters[filter].values, activeFilters[filter] || [], onValueChnage, filter) }
    </div>
  ))
}

/**
 * Renders Filters Siderbar
 * @param  {Object}   options.activeFilters    Active Filters Hash
 * @param  {Object}   options.detailedFilters  Filters Hash.
 * @param  {Function} options.onValueChnage    Event Listener on checkbox on change
 * @return {JSX}                               Rendered Filters Siderbar
 */
const Filters = ({ activeFilters, detailedFilters, onValueChnage }) => (
  <div className='filters'>
    <form action=''>
      { makeFilters(activeFilters, detailedFilters, onValueChnage) }
    </form>
  </div>
)

export default Filters
