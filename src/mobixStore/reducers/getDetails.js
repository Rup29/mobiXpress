import {actionType} from "../constant/actionType"
const initialState = {
    getSiteDetails:[]
}
export const getSiteDetsilsReducers = (state = initialState, {type, payload})=>{
 switch (type) {
        case actionType.GET_SITE_DETAILS:
            return {getSiteDetails:payload}
    default:
        return state
 }
}