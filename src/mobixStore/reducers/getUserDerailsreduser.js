import {actionType} from "../constant/actionType"
const initialState = {
    userDetails:[]
}
export const getUserReducers = (state = initialState, {type, payload})=>{
 switch (type) {
    case actionType.USER_DETALIS:
        return {...state, userDetails:payload}

        case actionType.USER_DETALIS_CLEAR:
            return {...initialState}
    default:
        return state
 }
}