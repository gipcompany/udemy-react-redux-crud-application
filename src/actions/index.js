export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

/* objectをreturnする場合 */
const returnObjectPattern1 = () => { return { type: 'DECREMENT' } }
const returnObjectPattern2 = () => ({ type: 'DECREMENT' })
console.log(returnObjectPattern1())
console.log(returnObjectPattern2())

/* nullをreturnする場合 */
const returnNullPattern1 = () => { return null }
const returnNullPattern2 = () => (null)
console.log(returnNullPattern1())
console.log(returnNullPattern2())

/* trueをreturnする場合 */
const returnTruePattern1 = () => { return true }
const returnTruePattern2 = () => (true)
console.log(returnTruePattern1())
console.log(returnTruePattern2())