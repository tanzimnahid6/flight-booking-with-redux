/* eslint-disable no-case-declarations */
import { ADD_BOOKING } from "./actionType"

const initialState = {
  bookingList: [],
}

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      const { id, booking } = action.payload
      return {
        ...state,
        bookingList: [
          ...state.bookingList,
          {
            id: id,
            booking: booking,
          },
        ],
      }
    case action.type:
      const newState = [...state.bookingList]
      const newState2 = newState.filter(
        (flight) => flight.id !== action.payload
      )
      return {
        ...state,
        bookingList: newState2,
      }

    default:
      return state
  }
}
