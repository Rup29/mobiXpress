import {actionType} from "../constant/actionType"
const initialState = {
    homeRes:[]
}
export const getHomeReducers = (state = initialState, {type, payload})=>{
 switch (type) {
    case actionType.GET_HOME:
        return {...state, homeRes:payload}
    default:
        return state
 }
}