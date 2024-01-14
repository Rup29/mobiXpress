import React, { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function SignUp(){
     const navigate  = useNavigate();
     const [customer_name, setName] = useState("");
     const [email_address, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [gender, setGender] = useState("");
     const [password, setPassword] = useState("");
     const [errorMsg, setIsErr] =useState(null)
     const  SignupForm = async(event)=>{
          event.preventDefault();

          let SignupForm = {
               customer_name,email_address,phone,gender, password
          }
         let result = await fetch("https://www.mobixpress.in/mobile-api/register.php",{
          method:"POST",
          headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
          },
          body:JSON.stringify(SignupForm)
     })
           result = await result.json();  
           if(result.message == "success"){
               navigate("/otp")
               localStorage.setItem("user_email", email_address)
           }  
           else if(result.message == "duplicate"){
               setIsErr("Email Id allerady register");
           }
           else{
               setIsErr("Worng Signup");
           }   
              
     } 
  
     return <div className="authForm">
          <div className="container">
          <div className="row">
               <div className="col-6">
                   dfd
               </div>
               <div className="col-6">
                    <form onSubmit={SignupForm}>
                         <h2>Welcome To Login</h2>
                         <div className="formGroup">
                              <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" name="name"/>
                         </div>
                         <div className="formGroup">
                              <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" name="email"/>
                         </div>
                         <div className="formGroup">
                              <input type="number" onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number" name="number"/>
                         </div>
                         <div className="formGroup">
                             <select onChange={(e)=>setGender(e.target.value)}>
                             <option >Select Gender</option>
                              <option value="Male">Male</option>
                              <option  value="Female">Female</option>
                             </select>
                         </div>
                         <div className="formGroup">
                              <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} name="password"/>
                         </div>
                        
                         <button type="submit">Signin</button>
                         <p>Already have an Account ? <Link to="/login">Login</Link></p>
                         {errorMsg && <p className='errormsg'>{errorMsg}</p>}
                    </form>
               </div>
          </div>
          </div>
     </div>
}
export default SignUp;