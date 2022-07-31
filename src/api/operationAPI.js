import axiosClient from './axiosClient'

const getAllWorkingDate = async () => {
  return await axiosClient.get('/operation/working-date')
}

export const operationAPI = {
  getAllWorkingDate
}
