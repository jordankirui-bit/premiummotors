import axios from 'axios'
import React from 'react'
import { useLocation } from "react-router-dom";
import { useState } from "react";



const Mpesapayment = () => {
  const{singleproduct} = useLocation().state||{}
  const imagepath="https://jordanmbuni.alwaysdata.net/static/images/"
  // declare your states here 
  const[phone ,setPhone]=useState("")
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // function to make payment 
  const handlesubmit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    // create an empty digital envelope 
    
    const formdata=new FormData()
    formdata.append("phone",phone)
    formdata.append("amount",singleproduct.product_cost)

    try{
      const response=await axios.post("https://jordanmbuni.alwaysdata.net/api/mpesa_payment",formdata)
      setSuccess(response.data.message)
      setLoading("")
    }
    catch(error){
      setError("Something went wrong")
      setLoading("")
    }

  }
  return (
    <div className="row justify-content-center">
      
      <h1 className='text-success'>Make payment-Lipa na Mpesa</h1>
      
      <div className="card shadow col-md-8 p-4">
        <img src={ imagepath+singleproduct.product_photo} alt="" style={{height:"600px",objectFit:"cover"}}/>
        
        <div className="card-body ">
          <h2 className='text-info'>{singleproduct.product_name}</h2>
          <p>{singleproduct.product_description}</p><br />
          <b className='text-danger'>{singleproduct.product_cost}</b><br />
          {/* bind the states  */}
          <h2 className="text-primary">{loading}</h2>
          <h2 className="text-success">{success}</h2>
          <h2 className="text-warning">{error}</h2>
          
          
          <form action="" onSubmit={handlesubmit}>
            <input type="number" className="form-control" placeholder='(Enter phone 254XXXXXXXXX)'onChange={(e)=>setPhone(e.target.value)} /><br />
            <button type='submit' className='w-100 btn btn-success text-dark'>Make Payment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Mpesapayment