import axios from 'axios' 

const baseURL = process.env.REACT_APP_BACKEND_URL

const middleURL = '/auth'

const getAll = async () => {
  const response = await axios.get(baseURL + middleURL + '/users')
  return response
}

const create = async (newObject) => {
  const response = await axios.post(baseURL + middleURL + '/', newObject)
  return response
}

export {getAll, create}