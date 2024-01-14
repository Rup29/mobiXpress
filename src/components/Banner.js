import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import 'swiper/css';
const Banner=()=>{
   const banner = useSelector((state)=>state.getHomeApi.homeRes.banner)
         return(  
                  <div className="banner">
                      {<Swiper
                     modules={[Navigation, Pagination,Autoplay]}
                     navigation
                     autoplay 
                     spaceBetween={0}
                     slidesPerView={1}
                     >
                        {banner?.map((item,index)=>{
                    
                           return(
                              <SwiperSlide key={index}>
                                 <img src={item.image} alt='banner'/>
                              </SwiperSlide>
                           )
                           })
                        }
                     </Swiper>} 
                   
                  </div>
               );
}
export default Banner;