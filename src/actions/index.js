import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = async () =>  {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  return { type: READ_EVENTS, response }
}
