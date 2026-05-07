import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

const Signin = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState("")
  const [success,setSuccess]=useState("")
  const [error,setError]=useState("")
  const navigate=useNavigate()

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
      //=========================================================================================================================
    if (response.data.user){
      localStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/")
    }
    //=========================================================================================================================
      setEmail("")
      setPassword("")
    }
    catch(error){
      setError(error.message)
      setLoading("")
    }
  }

  return (
    <div className='row mt-2 justify-content-center'>
      <div className="col-md-6 card shadow p-3">
        <h1> SIGNIN </h1>
        {loading && <h2 className='text-warning'>⏳ {loading}</h2>}
        {success && <h2 className='text-success'>✓ {success}</h2>}
        {error && <h2 className='text-danger'>✗ {error}</h2>}
        <form onSubmit={handlesubmit}>
          <input 
            type="email" 
            placeholder='Email'
            className='form-control' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          /><br />
          <input 
            type="password" 
            placeholder='Password'
            className='form-control'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          /><br />
          <button type="submit" className='btn btn-success w-100'> SIGNIN</button>
          <p className='text-center mt-3'>Don't have an account? <Link to="/signup" className='text-danger'>SIGN UP</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin