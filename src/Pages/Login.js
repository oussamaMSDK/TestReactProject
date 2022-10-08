import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Login() {

    var [username,setUsername ] = useState('')
    var [pass,setPass ] = useState('')
    var [items, setItems] = useState([])
    const Con = ()=>{
        if(!username){console.log(items)}
        else{
            setItems([...items, {username:username,password:pass} ]);
            console.log(items);
            setTimeout(() => {
            console.log({username,pass});
            localStorage.setItem("userpass",JSON.stringify(items))
            nav("/home")
        }, 500);
        
        }
    }

    const nav = useNavigate()
  
    const inputStyle ={
        background:"#F3F3F3",
        border:"solid #E2DFDF 1px",
        outline:"none",
        width:"100%",
        borderRadius:"12px",
        padding:"15px 30px 15px 30px"
      }

  return (
    <div style={{backgroundColor:"#F3F3F3"}}>
        <Nav/>
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='d-flex flex-column justify-content-center p-5 shadow-lg bg-body rounded enteranimate'>
          <h1 style={{}}><b>Login</b> </h1>
          <div className='mb-3 mt-4'>
            <h6>email</h6>
            <input style={inputStyle} type={'email'} placeholder="email@example.com" onChange={(e)=>setUsername(e.target.value)} required />
          </div>
          <div className='mt-3 mb-3'>
            <h6>Password</h6>
            <input type={'password'} style={inputStyle} placeholder="password" onChange={(e)=>setPass(e.target.value)} required />
          </div>
          <button  className='btn btn-danger m-auto w-100 mt-4 pt-3 pb-3' style={{borderRadius:"15px", fontSize:"20px", backgroundColor:"#E96363"}} onClick={()=>{Con();}}><b>Login</b> </button><br/>
        </div>
        </div>
    </div>
  )
}
