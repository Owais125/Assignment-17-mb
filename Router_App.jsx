import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ProductDetails } from '../Pages/ProductDetails'
import Login from '../Pages/Login'
import Singup from '../Pages/Singup'

const Router_App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='/' element={<Home/>}/>
                <Route path='productDetails/:id' element={<ProductDetails/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='singup' element={<Singup/>}/>

            </Route>
        )
    )
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export  {Router_App}