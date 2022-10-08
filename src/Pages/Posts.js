import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import NavLogout from '../components/NavLogout'

export default function Posts() {

    var [inf,setInf] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(r=>setInf(r.data), res=>console.log(res.data))
    },[])

  return (
    <div className='' style={{backgroundColor:"#F3F3F3", border:"red", outline:"none" }}>
        <NavLogout/>
        <div className='container'>
            <h1><b>Posts</b></h1>
            <div className=' mt-5'>
                <div className='row w-100'>
                {inf.map(item=><Card
                key={item.id}
                id={item.userId}
                title={item.title}
                body={item.body}

                />)} 
                </div>
            </div>
            

        </div>
    </div>
  )
}
