import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import login from "../../images/login.jpg";
import { useDispatch } from 'react-redux';
import {userDetails} from "../../mobixStore/action/getHomeAction"
function Login(){
     const dispatch = useDispatch()
     const navigate  = useNavigate();
     let [errorMsg, setIsErr] =useState("")
     const [email_address, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const  Loginform = async(event)=>{
          event.preventDefault();
          let userDetail = {
               email_address, password
          }
          let result = await fetch("https://www.mobixpress.in/mobile-api/login.php",{
               method:'POST',
               headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
               } ,
               body:JSON.stringify(userDetail)
          })
               result = await result.json();
               if(result.message == "success"){
                    dispatch(userDetails(result.data))
                    // localStorage.setItem("user_details",JSON.stringify(result));
                    navigate("/");
                 
                     
               }
               else{
                    setIsErr("Worng Username or Password") 
               }
               
            
     } 

     return <div className="authForm">
          <div className="container">
          <div className="row">
               <div className="col-6">
                   <img src={login}/>
               </div>
               <div className="col-6">
                    <form onSubmit={Loginform}>
                         <h2>Welcome To Login</h2>
                         <div className="formGroup">
                              <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" name="name"/>
                         </div>
                         <div className="formGroup">
                              <input type="text" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} name="password"/>
                         </div>
                         <button type="submit">Login</button>
                         <p>Don't have an Account ? <Link to="/signup">Signup</Link></p>
                         <p> <Link to="/forgotpassword">Forgot password ?</Link></p>
                        {errorMsg && <p className='errormsg'>{errorMsg}</p>}
                    </form>
               </div>
          </div>
          </div>
     </div>
}
export default Login;