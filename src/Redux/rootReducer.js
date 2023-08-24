import { combineReducers } from "redux";
import { bookingReducer } from "./bookingReducer";

export const rootReducer = combineReducers({
    booking:bookingReducer
})