import {actionType} from "../constant/actionType"
const initialState = {
    ProductCategoryById:[]
}
export const getCategoryIdReducers = (state = initialState, {type, payload})=>{
 switch (type) {
    case actionType.GET_PRODUCT_BY_CATEGORY_ID:
        return {...state, ProductCategoryById:payload}
    default:
        return state
 }
}