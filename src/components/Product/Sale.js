import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SaleImg1 from '../../images/product-banner-1.jpg';
import SaleImg2 from '../../images/product-banner-2.jpg';
function Sale(){
   return(
    <div className='sale-Sec'>
   <div className="container">
        <div className="row">
            <div className="col-7">
                <div className="sale-box">
                    <img src={SaleImg1} alt='image'/>
                      <div className="sale-txt">
                        <span>Sale 20% off all store</span>
                        <h3>Smartphone <br/>BLU G91 Pro 2022</h3>
                        <a href="" className='shop-now'>
                        Shop Now <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      </div>
                </div>
            </div>
            <div className="col-5">
            <div className="sale-box">
                    <img src={SaleImg2} alt='image'/>
                      <div className="sale-txt">
                        <span>Sale 40% off all store</span>
                        <h3>Hadephone <br/>BLU G91 Pro 2022</h3>
                        <a href="" className='shop-now'>
                        Shop Now <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      </div>
                </div>
            </div>
        </div>
      </div>
    </div>
   
   )
}
export default Sale;