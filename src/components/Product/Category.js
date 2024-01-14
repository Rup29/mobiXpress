import samsung from '../../images/samsung.png'
import Nokia from '../../images/nokia.png'
import Apple from '../../images/apple.png'
import Xaomi from '../../images/xiaomi.png'
import Realme from '../../images/realmi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faChevronDown,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useEffect,useRef} from 'react'
import {getProductByCategoryID} from "../../mobixStore/action/getHomeAction"
import { useNavigate } from 'react-router-dom'
function Category(){
    const dispatch = useDispatch();
    const outAria =useRef()
    const navigate = useNavigate()
    const productCategory = useSelector((state)=>state.getHomeApi.homeRes.category);

   function openCategory(){
    document.getElementById("category").classList.toggle("open")
   }
   useEffect(() => {
    let hander =(event)=>{
        if(!outAria.current.contains(event.target)){
           
            document.getElementById("category").classList.remove("open")
        }
     
    }
  document.addEventListener("mousedown", hander)
   return ()=> document.removeEventListener("mousedown",hander)

},[]);

async function getProduct (id){

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
          navigate("/productlist")
          if(result.message == "failed"){
            localStorage.removeItem("isCategorySearch")
        }
        else{
            localStorage.setItem("isCategorySearch", true) 
        }
       
         })).catch((err)=>{
          console.log(err);
         })
         
}
    return(
       <div className="categoryBox" ref={outAria}>
           <label onClick={openCategory}><FontAwesomeIcon icon={faBars} style={{marginRight:'15px'}}/>All Category <FontAwesomeIcon icon={faChevronDown} style={{position:'absolute',right:'15px'}}/></label>
           <ul id="category">
            {
                productCategory?.map((item, index)=>{
                     return(
                        <li key={index} onClick={()=>{getProduct(item.id)}}>
                            <Link to="/productlist">
                            <img src={item.images}/>
                            {item.name}
                            <FontAwesomeIcon icon={faAngleRight} style={{position:'absolute',right:'15px', color:'#888'}}/>
                            </Link>
                        </li>
                     )
                })
            }
           
           </ul>
       </div>
    );
}
export default Category;