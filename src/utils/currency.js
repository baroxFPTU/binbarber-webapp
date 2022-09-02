export const formatCurrency = (amount) => {
  const formater = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })

  return formater.format(amount)
}