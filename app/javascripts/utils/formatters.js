import * as helpers from './helpers'

/**
 * Create Structure for Filters and Sorting
 * @param  {Object} filters  Filters data from API/DEMO
 * @return {Object}          Formatted Data
 */
function addFilters(filters) {
  const formattedFilters = {}
  const filterNames = []

  for (const filter in filters) {
    const filterName = filters[filter].name

    filterNames.push(filterName)
    formattedFilters[`by${helpers.toTitleCase(filterName)}`] = (filterName === 'price')
      ? {
        range01 : [],
        range12 : [],
        range23 : []
      }
      : filters[filter].values.reduce((prev, curr) => {
        return {
          ...prev,
          [curr.toLowerCase()] : []
        }
      }, {})
  }

  formattedFilters.filters = filterNames

  return formattedFilters
}

/**
 * Format and Filter Products Data by Price, Brand
 * Add ID to each product
 * @param  {Object} products  API products data
 * @return {Object}          Formated Products data
 */
export function formatProducts(products) {
  const formatedProducts = {
    ...addFilters(products.filters),
    allProducts : {}
  }

  for (let iter = 0, length = products.products.length; iter < length; iter++) {
    const prod = products.products[iter]
    const filters = formatedProducts.filters

    prod.id = iter
    prod.price *= 1
    formatedProducts.allProducts[iter] = prod

    // Iterate Through all the Filter types and Sort the products accordingly
    for (const filter in filters) {
      const filterName = filters[filter]

      if (filterName === 'price') {
        if (prod.price < 1) {
          formatedProducts.byPrice.range01.push(prod.id)
        } else if (prod.price >= 1 && prod.price < 2) {
          formatedProducts.byPrice.range12.push(prod.id)
        } else if (prod.price >= 2 && prod.price <= 3) {
          formatedProducts.byPrice.range23.push(prod.id)
        }
      } else {
        prod[filterName] = prod[filterName].toLowerCase()

        // formatedProducts.byBrand[prod[filterName]].push(prod.id)
        formatedProducts[`by${helpers.toTitleCase(filterName)}`][prod[filterName]].push(prod.id)
      }
    }
  }

  return formatedProducts
}
