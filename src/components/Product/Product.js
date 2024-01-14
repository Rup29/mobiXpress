import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faEye } from '@fortawesome/free-solid-svg-icons'
import {  Link } from "react-router-dom";
const {useState, useEffect} = React;
const  Product = (peoductItem)=>{
    const Countdown = () => {
      const [countdownDate, setCountdownDate] = useState(new Date('12/25/2023').getTime());
      const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        setInterval(() => setNewTime(), 1000);
      }, []);
    
      const setNewTime = () => {
        if (countdownDate) {
          const currentTime = new Date().getTime();
    
          const distanceToDate = countdownDate - currentTime;
    
          let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
          );
          let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
    
          const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
          days = `${days}`;
          if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
          } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
          } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
          }
    
          setState({ days: days, hours: hours, minutes, seconds });
        }
      };
    
      return (
        <div className='trimer'>
        <div className='time'>
          <h4>{state.days || '0'}</h4>
        <label>Days</label>
        </div>
        <div className='time'>
          <h4>{state.hours || '00'}</h4>
        <label>Hours</label>
        </div>
        <div className='time'>
          <h4> {state.minutes || '00'}</h4>
        <label>Minutes</label>
        </div>
        <div className='time'>
        <h4> {state.seconds || '00'}</h4>
        <label>Seconds</label>
        </div>
        </div>
      );
    };
  
  //  const {category, name, price, lessPrice, image, quality, show} = props;
     return(
        <div className="product-item">
            <div className="productImage">
              <img src={peoductItem.image} alt="Product Image"/>
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
             
                <label>{peoductItem.brand} | {peoductItem.category}</label>
                <h2 title={peoductItem.name}><Link to="/details">{peoductItem.name}</Link></h2>
                <p>Quality : {peoductItem.quality}</p>
                <p>Stock : {peoductItem.inStock}</p>
                {
                  peoductItem.prices?.map((item, index)=>{
                     return <p key={index} className='pricelist'><b> Price : {item.special_price}</b> <span>{item.price}</span> <small>{item.discount} OFF</small></p>
                  })
                }
                
                {/* <div className='timer'>
                  {show ? Countdown() :''}
                </div> */}
                
            </div>
        </div>
     );
}
export default Product;