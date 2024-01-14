import React, { useEffect,useRef } from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function UpdatePassword(){
     const newFer =useRef();
     const navigate  = useNavigate();
     const [password, setPassword] = useState("");
     const [confirmpassword, setConfirmPassword] = useState("");
     const [notMatch, setMatchPassword] = useState(null);

     const upDatePasswords = async (event)=>{
          event.preventDefault();
          if(password === confirmpassword){
               let updatePassword = {
                    password 
                   }
               let result = await fetch("https://www.mobixpress.in/mobile-api/update-password.php",{
              method:"POST",
              headers:{
                   "Content-Type":"application/json",
                   "Accept":"application/json"
              },
              body:JSON.stringify(updatePassword)
         })
               result = await result.json(); 
               if(result.message == "success"){
                    navigate("/login") 
               } 
          }
          
          else{
               setMatchPassword("Password Not Match")
          }   
     }
     useEffect(()=>{
          let removeLocal =(event)=>{
          if(!newFer.current.contains(event.target)){
                localStorage.removeItem('forgotPassoord')
          }
           }
           document.addEventListener("mousedown", removeLocal)
           return ()=> document.removeEventListener("mousedown",removeLocal)
     
        })

     return <div className="authForm">
          <div className="container">
          <div className="row">
               <div className="col-6">
                   dfd
               </div>
               <div className="col-6">
                    <form onSubmit={upDatePasswords} ref={newFer}>
                         <h2>Update Password</h2>
                         <div className="formGroup">
                         <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" name="password" required/>
                         </div>
                         <div className="formGroup">
                         <input type="text" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password" name="confirm password" required/>

                         </div>
                        
                         <button type="submit">Update Password</button>
                            {notMatch && <p className='errormsg'>{notMatch}</p>}
                    </form>
                   
               </div>
          </div>
          </div>
     </div>
}
export default UpdatePassword;
     