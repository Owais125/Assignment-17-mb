import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress, Typography } from "@mui/material";
import {auth} from '../Config/firebase/index'

import { signOut } from 'firebase/auth';
import { set_user_auth } from '../Store/user_data';

const Navbar = () => {
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user_data = useSelector((store) => store.user_data);
    const logout_handle = () =>{
        signOut(auth).then((res)=>{
            dispatch(set_user_auth(false))
            navigate('/login')
            console.log('logout ho gya...!')
        })
    
      }

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">E-Commerce Store</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
         
    {user_data.loading ? (
          <CircularProgress color="warning" />
        ) : (
          <div>

            
            
            
            
            
            





            {user_data.isLoggedIn ? (
              <div className="space-x-3 text-white font-medium d-flex">
                <button className='btn btn-primary ms-2' onClick={logout_handle} >
                    Logout
                </button>
              </div>
              
            ) : (
              <div className="space-x-3 text-white font-medium">
                <Link className='btn btn-primary' to="/login">Login</Link>
             
                <Link className='btn btn-primary ms-2' to="/singup">Signup</Link>
              </div>
            )}
          </div>
        )}
      </ul>
    </div>
  </div>
  )
}

export  {Navbar}