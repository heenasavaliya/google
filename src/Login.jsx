import React from 'react';
import { useEffect } from 'react';
import  { useState } from 'react'
import { onAuthStateChanged , signInWithPopup, signOut } from 'firebase/auth';
import { auth , provider} from"../firebaseConfig"

export default function Login() {
const[user,setUser] = useState(null);
useEffect(() =>{
    let subscribe = onAuthStateChanged(auth ,(CurrentUser)=>{
        if(CurrentUser){
            setUser(CurrentUser)
        }
    })
},[])
const handleLogin = async()=>{
    let user = await signInWithPopup(auth ,provider);
    console.log(user);
    setUser(user.user);
}
const handleSingOut = async() => {
    await signOut(auth);
    setUser(null)
}

  return (
    <div>
        {
            user ?
           <div className='a'>
            <h1>welcome  {user.displyName}</h1>
            <h1>Welcome {user.email}</h1>
            <img src={user.photoURL} width='20%'  alt="" />
            <button onClick={handleSingOut}>Sign out</button>
            </div>
            :
            <div >
                    <div class="container">
        <h2>Welcome back</h2>
        <p>Please sign in or register a new account</p>
        <form>
            <div>
               
                <input type="email" id='email' name='email' placeholder='Enter your email' />
               
            </div>
            <div>
                
            
                <input type="password" name="password" id="password" placeholder='Enter your password'/>
            </div>
            <button type="submit">Sign in</button>
        </form>
        <p>Register new account</p>
        <p>or sign-in with</p>
        <div class="social-buttons">
            <button class="social-button" type="button"><i class="fab fa-google"></i> Google</button>
            <button class="social-button" type="button"><i class="fab fa-facebook-f"></i> Facebook</button>
            <button class="social-button" type="button"><i class="fab fa-twitter"></i> Twitter</button>
        </div>
        <div class="forgot-password">
            <a href="#">Forgot password?</a>
        </div>
    </div>

            

            <button onClick={handleLogin}> Log IN</button>
           </div>
        }
      
    </div>
  )
}
