import axiosClient from './axiosClient'

const getAllWorkingDate = async () => {
  return await axiosClient.get('/operation/working-date')
}

const getWorkingDate = async (date) => {
  return await axiosClient.get(`/operation/working-date/${date}`)
}

const generateWorkingDate = async (date) => {
  return await axiosClient.get(`/operation/working-date/generate?date=${date}`)
}

export const operationAPI = {
  getAllWorkingDate,
  getWorkingDate,
  generateWorkingDate
}
