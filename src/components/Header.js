import React, { useEffect } from 'react'
import "./Header.css"
import {LOGO_URL} from "../utils/constants";
import { useState } from 'react';
import { About } from './About';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("Login");
    const onelineStatus=useOnlineStatus();

  return (
    <div className="header">
            <div className="logo-container">
                <img 
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    {/* <li>
                        Online Status: {onelineStatus? "🟢" : "🉐"}
                    </li> */}
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                        Contact us
                        </Link>
                    </li>
                    <li>
                        <Link to="/grocery">
                        Grocery
                        </Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <li>
                    <button className='login' onClick={()=>{
                        btnNameReact ==='Login' ?
                        setBtnNameReact("Logout") : setBtnNameReact("Login")
                        
                        }}>{btnNameReact}</button>
                    </li>
                    
                </ul>
               
            </div>
        </div>
  )
}

export default Header