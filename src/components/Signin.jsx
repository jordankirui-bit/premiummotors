import React,{useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


const Signin = () => {
  // declare our states here
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  //define the 3 states for posting data
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // function to handlesubmit 
  const handlesubmit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    const formdata=new FormData()
    formdata.append("email",email)
    formdata.append("password",password)

    try{
      const response=await axios.post("https://jordanmbuni.alwaysdata.net/api/signin",formdata)
      setSuccess(response.data.message)
      setLoading("")
    }
    catch(error){
      setError(error.message)
      setLoading("")
    }
    
  }
  return (
    <div  className='row mt-2 justify-content-center'>
      <div className="col-md-6 card shadow p-3">
      <h1>Signin</h1>
      {/* Bind the states  */}
      <h2 className='text-dark'>{loading}</h2>
      <h2 className='text-success'>{success}</h2>
      <h2 className='text-warning'>{error}</h2>
      <form action="" onSubmit={handlesubmit}>
        <input type="email" placeholder='Email'className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
        <input type="password" placeholder='Password'className='form-control'onChange={(e)=>setPassword(e.target.value)}/><br />
        <button type="submit" className='btn btn-primary w-100'>Signin</button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>


      </form>

      </div>
    </div>
    
  )
}

export default Signin