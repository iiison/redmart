/**
 * Convert First Letter of String to Caps
 * @param  {String} str  String to Convert to Title
 * @return {String}     Title Case Converted String
 */
export function toTitleCase(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}
