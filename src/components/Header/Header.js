import Search from './Search'
import Category from '../Product/Category'
import logo from '../../logo.png';
import React from 'react';
import phone from '../../images/call.png';
import shopping from '../../images/online-shopping.png';
import wallet from '../../images/wallet.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast,faUser } from '@fortawesome/free-solid-svg-icons'

function Header(){
    // function demoFunction(data){
    //     console.log(data);
    // }
  return(
    <header className="header">
      <div className='tobar'>
        <div className='container'>
          <p><FontAwesomeIcon icon={faTruckFast}  style={{color:'#ffbf00', fontSize:"20px", marginRight:'8px'}}/>FREE Express Shipping On Orders $570+</p>
          <ul className='top-menu'>
            <li>
              <a href='javascript:void(0);'>English</a>
            </li>
            <li>
              <a href='javascript:void(0);'>Usd</a>
            </li>
            <li>
              <a href='javascript:void(0);'>Setting</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='header-mdl'>
      <div className="container">
           <div className="logo">
                  <img src={logo} alt='logo'/>
           </div>
           <Search/>
           <div className='userinfo'>
            <div className='login-cred'>
              <div className='user-icon'>
              <FontAwesomeIcon icon={faUser} />
              </div>
              <div className='user-details'>
                <label>Hello, Sign In</label>
                <p>Your Account</p>
              </div>
            </div>
            <div className='cart'>
               <a href=''><img src={shopping}/><span>10</span></a>
               <a href=''><img src={wallet}/><span>1521.00</span></a>
            </div>
           </div>
        </div>
      </div>
        <div className='menusec'>
        <div className="container">
        <div className='menusecleft'>
            <div className='category'>
              <Category/>
            </div>
          <div className="menu">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <a href="">Best Deal <span>New</span></a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            
            </ul>
           </div>
          </div>
          <div className='menusecright'>
            <div className='contactinfo'>
            <img src={phone}/>
            <div>
            <label>Help Number</label>
            <a href='tel:+(402) 763 282 46'>+(402) 763 282 46</a>
            </div>
            </div>
         </div>
          </div>
        </div>
    </header>
  );
}
export default Header;