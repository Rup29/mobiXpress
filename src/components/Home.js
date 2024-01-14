
import Banner from "../components/Banner"
import Feature from "../components/Feature"
import ProductList from "../components/Product/ProductList"
import Sale from "../components/Product/Sale"
import DealoftheDay from "../components/Product/Deal"
import Offer from "../components/Product/Offer"
import Category from "../components/Product/ProductCategory"
import {useState, useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import {getHome} from "../mobixStore/action/getHomeAction"
import {getSiteDetails} from "../mobixStore/action/getHomeAction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faEye } from '@fortawesome/free-solid-svg-icons'
import {  Link } from "react-router-dom";
function Home() {
     const dispatch = useDispatch();
     const productList = useSelector((state)=>state.getHomeApi.homeRes.all_product)
     async function getDat() {
        try{
            const result = await fetch("https://www.mobixpress.in/mobile-api/get-home.php",{})
            const getData = await result.json();
            dispatch(getHome(getData.data))
            // get site details
            const siteresult = await fetch("https://www.mobixpress.in/mobile-api/get-settings.php",{})
            const getsiteresult = await siteresult.json();
            dispatch(getSiteDetails(getsiteresult.data))
        }catch(err){
         console.log(err);
        }
     }
    useEffect(()=>{
        getDat();
    },[])

    return(
        
    <div className="home">  
 
    <Banner />
    <Feature/>
    <Category />
    <div className="productListHome">
        <div className="container">
        <div className="heading container">
            <h2 className=''>Trending Product</h2>
            <svg _ngcontent-ng-c379887800="" width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c379887800="" d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053" stroke="#fe0000" stroke-width="4" stroke-miterlimit="3.8637" stroke-linecap="round"></path></svg>
            </div>
            <div className="productListHomesec">
            {
                productList?.slice(0,8).map((item, index)=>{
                    return (
                        <div className='product-colum' key={index}>
                        <a href='javascript:void(0);'>
                        <div className="product-item">
            <div className="productImage">
              <img src={item.image} alt="Product Image"/>
              <ul className='cart-box'>
                <li>
                  <a href=""><FontAwesomeIcon icon={faCartShopping} />
                  <span>Add To Cart</span>
                  </a>
                </li>
                <li>
                  <a href=""><FontAwesomeIcon icon={faEye} />
                  <span>View Details</span></a>
                </li>
              </ul>
            </div>
            <div className="productDetails">
             
                <label>{item.brand_name} | {item.category_name}</label>
                <h2 title={item.product_name}><Link to="/details">{item.product_name}</Link></h2>
                <p>Quality : {item.quality_text}</p>
                <p>Stock : {item.stock_availability}</p>
                {
                  item.price?.map((item)=>{
                     return <p className='pricelist'><b> Price : {item.special_price}</b> <span>{item.price}</span> <small>{item.discount} OFF</small></p>
                  })
                }
                
                {/* <div className='timer'>
                  {show ? Countdown() :''}
                </div> */}
                
            </div>
        </div>
                        </a>
                        </div>
                    )
                })
            }
        </div>
        </div>
     
    </div>
    <Sale />
    <DealoftheDay />
    <Offer />
    </div>
    ) 
}
export default Home;