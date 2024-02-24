import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card2 from '../Components/Card2'
import axios from 'axios'

const ProductDetails = () => {
    const [Single, setSingle] = useState('')
   const {id}= useParams()

   const data = axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((res)=>{
    console.log(res.data)
    setSingle(res.data)
}).catch((err)=>{
    console.log(err)
})
  return (
    <div>
        <Card2 image={Single.images} title={Single.title} dec={Single.description} />
    
    </div>
  )
}

export  {ProductDetails}