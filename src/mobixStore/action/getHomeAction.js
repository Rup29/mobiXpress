import {actionType} from "../constant/actionType"
export const getHome =(homeres)=>{
    return{
       type:actionType.GET_HOME,
       payload:homeres
    }
}
export const userDetails =(userD)=>{
    return{
       type:actionType.USER_DETALIS,
       payload:userD
    }
}
export const userDetailsClear =()=>{
    return{
       type:actionType.USER_DETALIS_CLEAR,
    }
}
export const getProductByCategoryID =(categoryId)=>{
    return{
       type:actionType.GET_PRODUCT_BY_CATEGORY_ID,
       payload:categoryId

    }
}
export const getProductBySearech =(searchProduct)=>{
    return{
       type:actionType.GET_PRODUCT_BY_SEARCH,
       payload:searchProduct

    }
}
export const getSiteDetails =(getsiteDetsils)=>{
    return{
       type:actionType.GET_SITE_DETAILS,
       payload:getsiteDetsils

    }
}