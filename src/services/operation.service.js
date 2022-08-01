import { operationAPI } from 'api/operationAPI'

const getWorkingDate = async (date) => {
  console.log('Fetch working date at: ', date)
  // Fetch to Get working date
  const workingDates = await operationAPI.getAllWorkingDate()

  // return data
  return workingDates.data
}

export const operationService = {
  getWorkingDate
}
