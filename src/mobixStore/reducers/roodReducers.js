import {combineReducers} from "redux"
import {getHomeReducers} from "./getHomereducer"
import {getUserReducers} from "./getUserDerailsreduser"
import {getCategoryIdReducers} from "./getProductByCategoryId"
import {getProductBySearchReducers} from "./getProductBySearch"
import {getSiteDetsilsReducers} from "./getDetails"
const rootReducer =  combineReducers({
      getHomeApi:getHomeReducers,
      userdetails:getUserReducers,
      productByCategoryId:getCategoryIdReducers,
      productBySearch:getProductBySearchReducers,
      getSite:getSiteDetsilsReducers,
}) 
export default rootReducer;