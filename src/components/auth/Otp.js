import React, { useEffect } from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
function Otp(){
     const navigate  = useNavigate();
     const [otp, setOtp] = useState("");
     const [wrongOtp, setworngOtp] = useState("");
     const email = localStorage.getItem('user_email')
    //  const [resendOtp, setResendOtp] = useState(false);
     const resendOTP = async ()=>{
            let resendotp = {
                email 
              }
             let result = await fetch("https://www.mobixpress.in/mobile-api/resend-otp.php",{
              method:"POST",
              headers:{
                   "Content-Type":"application/json",
                   "Accept":"application/json"
              },
              body:JSON.stringify(resendotp)
         })
               result = await result.json();  
     }
     const  otpVerify = async(event)=>{
          event.preventDefault();
               if(localStorage.getItem('forgotPassoord')){
                    navigate("/updatepassword")

               }
               else{
                      let vOtp = {
                         email, otp 
                       }
                      let result = await fetch("https://www.mobixpress.in/mobile-api/verify-otp.php",{
                       method:"POST",
                       headers:{
                            "Content-Type":"application/json",
                            "Accept":"application/json"
                       },
                       body:JSON.stringify(vOtp)
                       })
                        result = await result.json();  
                        if(result.message ==  "success"){
                         navigate("/login")
                        }
                        else{
                         setworngOtp("You have enter wrong OTP")
                        }
               }
                 
     } 

     return <div className="authForm">
          <div className="container">
          <div className="row">
               <div className="col-6">
                   dfd
               </div>
               <div className="col-6">
                    <form onSubmit={otpVerify}>
                         <h2>Verify OTP</h2>
                         <p>Please type verification code sent to <span>{email}</span></p>
                         <div className="formGroup">
                            
                              <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder="Enter Verification Code" name="code"/>

                         </div>
                         <button type="submit">Verify OTP</button>
                            <Link onClick={resendOTP}>Resend OTP</Link>
                            <p>{wrongOtp}</p>
                    </form>
                   
               </div>
          </div>
          </div>
     </div>
}
export default Otp;