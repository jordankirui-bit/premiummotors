import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState("")
  const [success,setSuccess]=useState("")
  const [error,setError]=useState("")
  const [strength,setStrength]=useState("")

  const handlesubmit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    const formdata=new FormData()
    formdata.append("username",username)
    formdata.append("email",email)
    formdata.append("phone",phone)
    formdata.append("password",password) 
    try {
      const response = await axios.post("https://jordanmbuni.alwaysdata.net/api/signup",formdata)
      setSuccess(response.data.message)
      setLoading("")
      setUsername("")
      setEmail("")
      setPhone("")
      setPassword("")
    }
    catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  const checkPasswordStrength=(password)=>{
    if(password.length<4){
      setStrength("Weak")
    } else if (password.length<8) {
      setStrength("Medium")
    } else {
      setStrength("Strong");
    } 

  }

  return (
    <div className='row mt-3 justify-content-center'>
      <div className='col-md-6 card shadow p-4'>
        <h1>⚡ SIGNUP ⚡</h1>
        {loading && <h2 className="text-warning">⏳ {loading}</h2>}
        {success && <h2 className="text-success">✓ {success}</h2>}
        {error && <h2 className="text-danger">✗ {error}</h2>}
        <form onSubmit={handlesubmit}>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Enter username' 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          /><br />
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          /><br />
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter password" 
            value={password}
            onChange={(e)=>{setPassword(e.target.value); checkPasswordStrength(e.target.value);}}
            required
            /><br />

            {password &&(
              <p
              style={{
                color:
                strength==="Weak"
                ? "red"
                : strength==="Medium"
                ? "orange"
                : "green",
              }}
              >
                Password Strength:{strength}
              </p>
            )}
          
          <input 
            type="tel" 
            className="form-control" 
            placeholder="Enter phone"  
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required

            
          /><br />
          <button type='submit' className='btn btn-success w-100'>⚡ SIGNUP</button><br />
          <p className='text-center mt-3'>Already have an account? <Link to="/signin" className='text-danger'>SIGNIN</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup