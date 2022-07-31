import axiosClient from './axiosClient'

const getAll = async () => {
  return await axiosClient.get('/bookings')
}

export const bookingAPI = {
  getAll
}
