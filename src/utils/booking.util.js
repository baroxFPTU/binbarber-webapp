import slugify from 'slugify'

export const bookingUtils = {
  generateUserId: (name, phone) => {
    const formatedName = slugify(name.trim().toLowerCase())
    const formatedPhone = phone.trim().replace(/\+/g, '')

    return `${formatedName}.${formatedPhone}`
  },
  saveToLocalStorage: (name, phone) => {
    localStorage.setItem('user_data', `${name}.${phone}`)
  },
  loadFromLocalStorage: () => {
    const savedData = localStorage.getItem('user_data')
    const [name, phone] = savedData.split('.')

    if (
      savedData &&
      name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/) &&
      phone.match(/([+84|84|0]+[3|5|7|8|9|1[2|6|8|9])+([0-9]{8})/)
    ) {
      return {
        name,
        phone
      }
    } else return null
  }
}
