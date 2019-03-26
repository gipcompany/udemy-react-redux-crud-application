import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// export const readEvents = () => async dispatch => {
//   const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//   dispatch({ type: READ_EVENTS, response })
// }

// export const readEvents = () => async (dispatch) => {
//   const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//   dispatch({ type: READ_EVENTS, response })
// }

// export const readEvents = () => async function(dispatch) {
//   const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//   dispatch({ type: READ_EVENTS, response })
// }

// export const readEvents = function() {
//   return async function(dispatch) {
//     const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//     dispatch({ type: READ_EVENTS, response })
//   }
// }

export function readEvents() {
  return async function(dispatch) {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
  }
}

// コースの中ではアロー関数を使用していますが、アロー関数ではなく、
// 従来のfunction を用いた関数で書き直すと上記のようになります。
// 全て機能は同じですが、見た目がこの通り違います。
// いずれも文法的には正しいので、どのパタンでも解釈できるようにしておくことが重要です。
