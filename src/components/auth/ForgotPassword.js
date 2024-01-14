import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import login from "../../images/login.jpg";
import localStorage from 'redux-persist/es/storage';
function ForgotPassword(){
   
     const navigate  = useNavigate();
     let [errorMsg, setIsErr] =useState("")
     const [email, setUsername] = useState("");
     const  resetPassword = async(event)=>{
          event.preventDefault();
          let reseMail = {
               email
          }
          let result = await fetch("https://www.mobixpress.in/mobile-api/forgot-password.php",{
               method:'POST',
               headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
               } ,
               body:JSON.stringify(reseMail)
          })
               result = await result.json();
               if(result.message == "success"){
                    navigate("/otp");
                    localStorage.setItem("forgotPassoord", true);
                    localStorage.setItem("user_email", email);
               }
               else{
                    setIsErr("Please enter your register email") 
               }
               
            
     } 

     return <div className="authForm">
          <div className="container">
          <div className="row">
               <div className="col-6">
                   <img src={login}/>
               </div>
               <div className="col-6">
                    <form onSubmit={resetPassword}>
                         <h2>Reset Password</h2>
                         <div className="formGroup">
                          <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Email" name="name"/>
                         </div>
                         <button type="submit">Send OTP</button>
                        {errorMsg && <p className='errormsg'>{errorMsg}</p>}
                    </form>
               </div>
          </div>
          </div>
     </div>
}
export default ForgotPassword;