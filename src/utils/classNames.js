/**
 * @param  {...String} classes
 * @returns String
 */
export const classNames = (...classes) => {
  return classes.filter(cl => cl !== '' || !cl).join(' ').trim()
}