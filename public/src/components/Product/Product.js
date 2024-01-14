import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
function Product(props){
    // let name = useState("Arup")

    // let [name, setName] = useState("Arup") 
    // function incrimentData(){
    //     setName("Rup")
    // }
   const {category, name, price, lessPrice, image, quality} = props;
     return(
        <div className="product-item">
            <div className="productImage">
              <img src={image} alt="Product Image"/>
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
                <label>{category}</label>
                <h2>{name}</h2>
                <p>Quality : {quality}</p>
                <span>{lessPrice}<b>{price}</b></span>

            </div>
        </div>
     );
}
export default Product;