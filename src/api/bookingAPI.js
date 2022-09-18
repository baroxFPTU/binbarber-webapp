import axiosClient from './axiosClient'

const URL = '/bookings'

export const bookingAPI = {
  getAll: async () => {
    return await axiosClient.get(URL)
  },
  getById: async (bookingId) => {
    return await axiosClient.get(`${URL}/${bookingId}`)
  },
  create: async (newBooking) => {
    return await axiosClient.post(URL, newBooking)
  },
  generateUserId: async (name, phone) => {
    return await axiosClient.post(`${URL}/generate-user-id`, {
      name,
      phone
    })
  }
}
