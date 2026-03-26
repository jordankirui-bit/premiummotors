import axios from 'axios'
import React,{useState} from 'react'

const Addproduct = () => {
  // declare the states here
  const [product_name,setProductName]=useState("")
  const [product_description,setProductDescription]=useState("")
  const [product_cost,setProductCost]=useState("")
  const [product_photo,setProductPhoto]=useState("")
  // define 3 states for posting data 
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // function to handlesubmit 
  const handlesubmit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    const formdata=new FormData()
      formdata.append("product_name",product_name)
      formdata.append("product_description",product_description)
      formdata.append("product_cost",product_cost)
      formdata.append("product_photo",product_photo)
      try {
        const response=await axios.post("https://jordanmbuni.alwaysdata.net/api/add_product",formdata)
        setSuccess(response.data.message)
        setLoading("")
      }
      catch (error) {
        setError(error.message)
        setLoading("")
        
      } 
  }
  return (
    <div className='row mt-3 justify-content-center'>
      <div className='col-md-6 card shadow p-4'>
      <h1>Add Product</h1>
      {/* binding the states  */}
      <h2 className="text-primary">{loading}</h2>
      <h2 className="text-success">{success}</h2>
      <h2 className="text-warning">{error}</h2>
      <form action="" onSubmit={handlesubmit}>
        <legend className='text-start'>Product Name</legend>
        <input type="text" className='form-control' onChange={(e)=>setProductName(e.target.value)} /><br />
        <legend className='text-start'>Description</legend>
        <textarea name="" className='w-100'  onChange={(e)=>setProductDescription(e.target.value)}></textarea><br />
        <legend className='text-start'>Cost(Ksh)</legend>
        <input type="number" className='form-control' onChange={(e)=>setProductCost(e.target.value)} /><br />
        <legend className='text-start'>Product Photo</legend>
        <input type="file" accept='image/*' className='form-control' onChange={(e)=>setProductPhoto(e.target.files[0])}/><br />
        <button type='submit' className='btn btn-primary w-100'>Add Product</button>
      </form>

      </div>
    </div>
  )
}

export default Addproduct