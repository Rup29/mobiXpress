import {actionType} from "../constant/actionType"
const initialState = {
    searchProduct:[]
}
export const getProductBySearchReducers = (state = initialState, {type, payload})=>{
 switch (type) {
    case actionType.GET_PRODUCT_BY_SEARCH:
        return {...state, searchProduct:payload}
    default:
        return state
 }
}