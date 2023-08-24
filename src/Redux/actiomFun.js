import { ADD_BOOKING, REMOVE_SINGLE_FLIGHT } from "./actionType"

export const addBooking = (bookingDetails) => {
  return{
    type:ADD_BOOKING,
    payload:{
        id:new Date().getTime().toString(),
        booking:bookingDetails
    }
  }
}
export const removeFlight = (id)=>{
    return{
        type:REMOVE_SINGLE_FLIGHT,
        payload:id
    }
}