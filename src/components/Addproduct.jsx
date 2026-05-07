import axios from 'axios'
import React, { useState } from 'react'

const Addproduct = () => {

  // hooks FIRST
  const [product_name, setProductName] = useState("")
  const [product_description, setProductDescription] = useState("")
  const [product_cost, setProductCost] = useState("")
  const [product_photo, setProductPhoto] = useState("")
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // check admin AFTER hooks
  const admin = JSON.parse(localStorage.getItem("user"));

  if (!admin || admin.role !== "admin") {
    return (
      <h2 className="text-danger text-center mt-5">
        Access Denied. Admins Only.
      </h2>
    );
  }

  const handlesubmit = async (e) => {
    e.preventDefault()

    setLoading("Please wait...")
    setError("")
    setSuccess("")

    const formdata = new FormData()

    formdata.append("product_name", product_name)
    formdata.append("product_description", product_description)
    formdata.append("product_cost", product_cost)
    formdata.append("product_photo", product_photo)

    try {
      const response = await axios.post(
        "https://jordanmbuni.alwaysdata.net/api/add_product",
        formdata
      )

      setSuccess(response.data.message)
      setLoading("")

      setProductName("")
      setProductDescription("")
      setProductCost("")
      setProductPhoto("")

    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  return (
    <div className='row mt-3 justify-content-center'>
      <div className='col-md-6 card shadow p-4'>

        <h1>⚡ ADD VEHICLE ⚡</h1>

        {loading && <h2 className="text-warning">{loading}</h2>}
        {success && <h2 className="text-success">{success}</h2>}
        {error && <h2 className="text-danger">{error}</h2>}

        <form onSubmit={handlesubmit}>

          <legend className='text-start'>Vehicle Name</legend>
          <input
            type="text"
            className='form-control'
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <br />

          <legend className='text-start'>Description</legend>
          <textarea
            className='form-control'
            value={product_description}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />

          <br />

          <legend className='text-start'>Price (KSH)</legend>
          <input
            type="number"
            className='form-control'
            value={product_cost}
            onChange={(e) => setProductCost(e.target.value)}
            required
          />

          <br />

          <legend className='text-start'>Vehicle Photo</legend>
          <input
            type="file"
            accept='image/*'
            className='form-control'
            onChange={(e) => setProductPhoto(e.target.files[0])}
            required
          />

          <br />

          <button type='submit' className='btn btn-success w-100'>
            ⚡ ADD VEHICLE
          </button>

        </form>
      </div>
    </div>
  )
}

export default Addproduct