import * as helpers from './helpers'

export function formatProducts(products) {
  const formatedProducts = {
    ...addFilters(products.filters),
    allProducts : {}
  }

  for (let iter = 0, length = products.products.length; iter < length; iter++) {
    const prod = products.products[iter]
    const filters = formatedProducts.filters

    prod.id = iter
    prod.price = prod.price * 1
    formatedProducts.allProducts[iter] = prod

    for (const filter in filters) {
      const filterName = filters[filter]

      if (filterName === 'brand') {
        prod[filterName] = prod[filterName].toLowerCase()

        // formatedProducts[`by${helpers.toTitleCase(filterName)}`][prod[filterName]].push(prod.id)

        formatedProducts.byBrand[prod[filterName]].push(prod.id)
      } else if (filterName === 'price') {
        if (prod.price < 1){
          formatedProducts.byPrice.range01.push(prod.id)
        } else if (prod.price >= 1 && prod.price < 2){
          formatedProducts.byPrice.range12.push(prod.id)
        } else if (prod.price >= 2 && prod.price <= 3){
          formatedProducts.byPrice.range23.push(prod.id)
        }
      }
    }
  }

  return formatedProducts
}

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