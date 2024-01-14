import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getProductByCategoryID} from '../../mobixStore/action/getHomeAction'
import { useNavigate } from 'react-router-dom'
const ProductCategorys =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const category = useSelector((state)=>state.getHomeApi.homeRes.category);
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
        <div className="container">
            <div className='categorysec'>
                {
                    <Swiper
                    modules={[Navigation, Pagination,Autoplay]}
                    navigation
                    autoplay 
                    spaceBetween={0}
                    slidesPerView={4}
                    >
                        {category?.map((item, index)=>{
                             return <SwiperSlide key={index}>
                                     <div className='categoryItem'>
                                        <Link to="/productlist" onClick={()=>getProduct(item.id)}>
                                        <div className='categoryItemimage'>
                                            <img src={item.images}/>
                                        </div>
                                        <label>{item.name}</label>
                                        </Link>
                                     </div>
                             </SwiperSlide>
                        })

                        }
                    </Swiper>
                }
            </div>

        </div>
     )
}
export default ProductCategorys;