/**
 * Convert First Letter of String to Caps
 * @param  {String} str  String to Convert to Title
 * @return {String}     Title Case Converted String
 */
export function toTitleCase(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

/**
 * Get Commons values in 2 arrays
 * @param  {Array} arr1  Array 1
 * @param  {Array} arr2  Array 2
 * @return {Array}       Result Array
 */
export function getIntersaction(arr1, arr2) {
  if (arr1.length === 0 || !arr1) {
    return arr2 || []
  }

  if (arr2.length === 0 || !arr2) {
    return arr1 || []
  }

  const map = arr1.reduce((prev, curr) => {
    return {
      ...prev,
      [curr] : true
    }
  }, {})

  return arr2.filter((value) => map[value] === true)
}
