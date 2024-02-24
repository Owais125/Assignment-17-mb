import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../Config/firebase/index'

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { set_user_auth } from '../Store/user_data';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState()

    const change_handle = (e) => {
        const { value, id } = e.target;

        setData({ ...data, [id]: value });
        console.log(data);
    };


  
    const submitHandle = async (e) => {
        e.preventDefault();
        try{
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
            dispatch(set_user_auth(true))
            navigate('/')
            console.log(userCredential.user)
        }
        catch(error){
            const errorMessage = error.message;
            console.log(errorMessage)
            dispatch(set_user_auth(false))
        }
  };


    
    return (
        <div className="hero min-h-screen bg-base-200">

  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={submitHandle}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input id='email'  onChange={change_handle} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input id='password'  onChange={change_handle} type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
            <p>Don't have an account?<Link to='/login'className='btn btn-link '>Singup Now</Link></p>
      
        </div>
        <div className="form-control mt-6">
        <Link to='/' type='submit' className='btn btn-info'>Login</Link >

        </div>
      </form>
    </div>
  </div>
</div>
       
    )
}

export default Login
