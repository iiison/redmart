/**
 * Convert First Letter of String to Caps
 * @param  {String} str  String to Convert to Title
 * @return {String}     Title Case Converted String
 */
export function toTitleCase(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

export function getIntersaction(arr1, arr2) {
  if (arr1.length === 0 || !arr1)
    return arr2 || []

  if (arr2.length === 0 || !arr2)
    return arr1 || []

  const map = arr1.reduce((prev, curr) => {
    return {
      ...prev,
      [curr] : true
    }
  }, {})

  return arr2.filter((value) => {
    if (map[value]) {
      return value
    }
  })
}
