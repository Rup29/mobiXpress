import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'
import mobile from "../../images/mobile-1.png"
import DealoftheDay from "./Deal"
import 'swiper/css';
import { Link } from 'react-router-dom';

function Details(){
 
    return(
    <div className="detailsSec">
      <div className="container">
        <div className="row">
            <div className="col-5">
             <div className='productSlider'>
                <div className='thambnalSlider'>

                </div>
                <div className='fullSlider'>
                     <img src={mobile} alt='image'/>
                </div>
                <div className='btn-group'>
                    <button type='button' className='addCard'>Add To Cart</button>
                    <button type='button' className='buynow'>Buy Now</button>

                </div>
             </div>
            </div>
            <div className="col-7">
              <div className='productsDetails'>
                <h1>OnePlus 11 5G - Refurbished</h1>
                <p>Cashify Warranty, Fair, 16 GB RAM / 256 GB, Marble Odyssey</p>
                <h3>₹46,599 <span>₹55,954</span> <small>Save ₹9,355 (17% Off)</small></h3>
                <h5>₹2,874/month EMI available. <Link>View Plans</Link>
                <small>No Cost EMI Available on Credit/Debit & Cardless</small></h5>
            

                <h4>Exclusive Offers</h4>
                <p className='lowestPrice'><span><FontAwesomeIcon icon={faTag} />Lowest Price Ever</span> Price Dropped By Rs. 500</p>
                <h4>Condition</h4>
                <div className='checskItem'>
                    <span>Fair</span><span>Good</span><span>Superb</span>
                </div>
                <h4>Storage</h4>
                <div className='checskItem'>
                    <span>4 GB / 128 GB</span><span>16 GB / 256 GB</span><span>8 GB / 128 GB</span>
                </div>
                <h4>Color</h4>
                <div className='checskItem'>
                   <small></small>
                   <small></small>
                   <small></small>
                </div>
                <h5>Enter pincode for exact delivery dates</h5>
                <div className='pincheck'>
                    <form>
                        <input type='text' placeholder='Enter Pincode'/>
                        <button type='button' className='checkBtn'>Check</button>
                    </form>
                </div>
              </div>
            </div>
        </div>
      </div>
      <DealoftheDay />
      </div>
    )
}
export default  Details;