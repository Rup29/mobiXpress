import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {getProductBySearech} from "../../mobixStore/action/getHomeAction"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Search=()=>{
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const searchProducts = async (e)=>{
        localStorage.removeItem("isCategorySearch")
        e.preventDefault();
        let searchvalue = document.getElementById('search').value;
        let searchProduct ={
          "terms":searchvalue
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
                navigate("/productlist")
                if(result.message == "failed"){
                    localStorage.removeItem("isSearch")                
                }
                else{
                    localStorage.setItem("isSearch", true) 
                }
           
               })).catch((err)=>{
                console.log(err);
               })
      }

    return(
        <form className="searchForm" onSubmit={searchProducts}>
            <input type="text" id='search' placeholder="Search Product..." required autocomplete="off"/>
            <button type="submit" className="searchButton"><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:'20px'}} /></button>
        </form>
    )

}
export default Search;