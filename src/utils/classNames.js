export const classNames = (...classes) => {
  return classes.filter(cl => cl !== '').join(' ')
}