import { useSelector,useDispatch } from "react-redux"
import Product from './Product'
import {getProductByCategoryID} from "../../mobixStore/action/getHomeAction"
import {getProductBySearech} from "../../mobixStore/action/getHomeAction"
import { useState,useEffect } from "react";
const  ProductList =() =>{
  const [onResult, setNoResult] = useState(false);
  const [allProduct, setAllProduct] = useState(true);
  const [allProductCategory, setAllProductCategory] = useState(false);
  const [allProductSearch, setAllProductSearch] = useState(false)
  const [terms, setTerms] = useState("");
  const product = useSelector((state)=>state.getHomeApi.homeRes);
  const productById = useSelector((state)=>state.productByCategoryId.ProductCategoryById);
  const searchProducts = useSelector((state)=>state.productBySearch.searchProduct.data);
  console.log(productById);
  const dispatch = useDispatch();
  // get Product category
  async function getProduct (id){
          setAllProduct(false)
          setAllProductCategory(true)
          setAllProductSearch(false)
          localStorage.removeItem("isSearch")
          localStorage.removeItem("isCategorySearch")
          let productId ={
            "categoryId":id
           }
           let result = await fetch("https://www.mobixpress.in/mobile-api/get-product.php",{
               method:'POST',
               headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
               } ,
               body:JSON.stringify(productId)
          })
               result = await result.json().then(((result)=>{
                dispatch(getProductByCategoryID(result.data))
                if(result.message == "failed"){
                  setNoResult(true)
                }
                else{
                  setNoResult(false)
                }
                  console.log(result.message);
               })).catch((err)=>{
                console.log(err);
               })
               
  }
  // search Product
   const searchProduct = async (e)=>{
    setAllProductSearch(true)
    setAllProduct(false)
    setAllProductCategory(false)
    e.preventDefault();
    localStorage.removeItem("isSearch")
    localStorage.removeItem("isCategorySearch")
    let searchProduct ={
      "terms":terms
     }
     let searchresult = await fetch("https://www.mobixpress.in/mobile-api/search.php",{
         method:'POST',
         headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
         } ,
         body:JSON.stringify(searchProduct)
    })
          searchresult = await searchresult.json()
          .then(((result)=>{
            dispatch(getProductBySearech(result))
            if(result.message == "failed"){
              setNoResult(true)
            }
            else{
              setNoResult(false)
            }
              console.log(result.message);
           })).catch((err)=>{
            console.log(err);
           })
  }
  // refresh Product
  const refreshProduct =()=>{
    setNoResult(false)
    localStorage.removeItem('isSearch');
    localStorage.removeItem('isCategorySearch');
    setAllProduct(true)
    setAllProductCategory(false)
      setAllProductSearch(false)
  }
  // global Serch
  useEffect(()=>{
    if(localStorage.getItem('isSearch')){
      setAllProductSearch(true)
      setAllProduct(false)
      setAllProductCategory(false)
    }
    if(localStorage.getItem('isCategorySearch')){
      setAllProductCategory(true)
      setAllProduct(false)
      setAllProductSearch(false)
    }
    return () => {
      // Code to run before the component is unmounted
      console.log('ComponentA will unmount. Cleanup tasks go here.');
    };
  })
    return(
      <div className="container">
       
       <div className="product-group">
        <div className="left-filtering-sec">
        <div className="left-filtering">
           <form onSubmit={searchProduct}>
            <input type="text" placeholder="Serach Product" required name="text" onChange={(e)=>setTerms(e.target.value)}/>
            <button type="submit" ><i class="fa fa-search" aria-hidden="true"></i></button>
           </form>
           <div className="searchgroup">
            <h3>Search By Category</h3>
             <ul className="category">
                
                {
                  product?.category?.map((item, index)=>{
                       return <li key={index} onClick={()=>{getProduct(item.id)}}>
                           <div className="checkItem">
                           <input type="checkbox" id={index} />
                            <label for={index}>{item.name}</label>
                           </div>
                       </li>
                  })
                }
             </ul>
           </div>
          </div>
        </div>
        <div className="right-product">
          <h2 className="producthdn"><label>Product List</label> <span><button type="button"><i class="fa fa-filter" aria-hidden="true"></i></button><button onClick={refreshProduct} type="button"><i class="fa fa-refresh" aria-hidden="true"></i></button></span></h2>
           {onResult? <p className="noResult">Sorry No Result Found</p>:""}
             {/* All Search Product   */}
               { allProductSearch &&
                  searchProducts?.map((item, index)=>{
                return (
                 <div className='product-colum' key={index}>
                <a href='javascript:void(0);'>
                <Product brand={item.brand_name} name={item.product_name} prices={item.price}  image={item.image} quality={item.quality_text} category={item.category_name} inStock={item.stock_availability} /> 
                </a>
                </div>
                )
                  })
                 }
                  {/* All Product category  */}
              {allProductCategory &&
                  productById?.map((item, index)=>{
                return (
                 <div className='product-colum' key={index}>
                <a href='javascript:void(0);'>
                <Product brand={item.brand_name} name={item.product_name} prices={item.price}  image={item.image} quality={item.quality_text} category={item.category_name} inStock={item.stock_availability} /> 
                </a>
                </div>
                )
                  })
                 }
                
              {/* All Product   */}
            {allProduct && product?.all_product?.map((productItem, index)=>{
            return(
               <div className='product-colum' key={index}>
                  <a href='javascript:void(0);'>
                  <Product brand={productItem.brand_name} name={productItem.product_name} prices={productItem.price}  image={productItem.image} quality={productItem.quality_text} category={productItem.category_name} inStock={productItem.stock_availability} /> 
                  </a>
                  </div>
            )
          })
          
         }
        </div>
     
       </div>
       </div>
    );
}
export default ProductList;