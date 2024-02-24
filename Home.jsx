import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImgMediaCard } from '../Components/Cards'
import { Navbar } from '../Components/Navbar'


const Home = () => {
    const [products, setProducts] = useState([])
    const [products2, setProducts2] = useState([])
    useEffect(()=>{
        getData()

    },[])
    const getData = ()=>{
        const data = axios.get("https://api.escuelajs.co/api/v1/products").then((res)=>{
            // console.log(res.data)
            let arr  = []
            const slice_Data = res.data.slice(1,6)
            const slice_Data02 = res.data.slice(8,27)

            // arr.push(slice_Data)
            console.log(arr);

            // console.log(slice_Data);
            
            setProducts(slice_Data)
            setProducts2(slice_Data02)

        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
 
    <div>
        <Navbar/>
       <div className='container-fluid  ' style={{display:"flex" ,  flexWrap:"wrap" ,gap:"15px 5px"}}>
       {products.map((e,i)=>{
           return <>
            <ImgMediaCard key={i} images={e.images} title={e.title.substring(0,24)+'...'} dec={e.description.substring(0,43)+'...'} id={e.id}/>
           </>   

        })

        }
       
      
       {products2.map((e,i)=>{
           return <>
            <ImgMediaCard key={i} images={e.images} title={e.title.substring(0,24)+'...'} dec={e.description.substring(0,43)+'...'} id={e.id}/>
           </>   

        })

        }
       </div>

    </div>
  )
}

export  {Home}