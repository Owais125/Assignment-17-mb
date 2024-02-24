import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../Config/firebase/index'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Singup = () => {
    const navgate = useNavigate()
    const [data,setData]  = useState()

    const change_handle = (e) => {
        const { value, id } = e.target;

        setData({ ...data, [id]: value });
    };




    const submitHandle = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const token = userCredential.accessToken;
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
            navgate('/login')
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SingUp now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={submitHandle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input id='name' type="text" placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input id='lastName' type="text" placeholder="Last Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={change_handle} id='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={change_handle} id='password' type="password" placeholder="password" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
            <p>already have an account?<Link to='/login'className='btn '>Login Now</Link></p>
      
        </div>

        <div className="form-control mt-6">
        <Link to='/login' type='submit' className='btn btn-info'>Singup</Link>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}

export default Singup

