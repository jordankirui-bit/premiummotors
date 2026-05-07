import axios from 'axios'
import React from 'react'
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Mpesapayment = () => {
  const { singleproduct } = useLocation().state || {}
  const imagepath = "https://jordanmbuni.alwaysdata.net/static/images/"
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handlesubmit = async(e) => {
    e.preventDefault()
    setLoading("Processing payment...")
    const formdata = new FormData()
    formdata.append("phone", phone)
    formdata.append("amount", singleproduct.product_cost)

    try {
      const response = await axios.post("https://jordanmbuni.alwaysdata.net/api/mpesa_payment", formdata)
      setSuccess(response.data.message)
      setLoading("")
      setPhone("")
    }
    catch(error) {
      setError("Payment failed. Please try again.")
      setLoading("")
    }
  }

  if (!singleproduct) {
    return <div className="text-danger text-center p-5">No vehicle selected. Please go back and select a vehicle.</div>
  }

  return (
    <div className="row justify-content-center p-4">
      <h1 className='text-success text-center w-100'>⚡ MPESA PAYMENT ⚡</h1>
      <div className="card shadow col-md-8 p-4">
        <img src={imagepath + singleproduct.product_photo} alt={singleproduct.product_name} style={{height:"500px",objectFit:"cover"}}/>
        <div className="card-body">
          <h2 className='text-info'>{singleproduct.product_name}</h2>
          <p>{singleproduct.product_description}</p><br />
          <b className='text-danger'>Price: KSH {singleproduct.product_cost}</b><br />
          {loading && <h2 className="text-warning mt-3">⏳ {loading}</h2>}
          {success && <h2 className="text-success mt-3">✓ {success}</h2>}
          {error && <h2 className="text-danger mt-3">✗ {error}</h2>}
          <form onSubmit={handlesubmit} className='mt-4'>
            <input 
              type="text" 
              className="form-control" 
              placeholder='Enter phone: 254XXXXXXXXX'
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              required
            /><br />
            <button type='submit' className='w-100 btn btn-success text-dark'>⚡ PAY NOW</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Mpesapayment