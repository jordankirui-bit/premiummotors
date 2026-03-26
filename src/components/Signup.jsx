import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
// declare our states here
const [username,setUsername]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [password,setPassword]=useState("")
// define three states for posting data   
const[loading,setLoading]=useState("")
const[success,setSuccess]=useState("")
const[error,setError]=useState("")
// function to signup the user 
const handlesubmit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    // create a digital envelope to store user inputs 
    // NB:It's empty and we need to append(add/attach) 
    const formdata=new FormData()
        formdata.append("username",username)
        formdata.append("email",email)
        formdata.append("phone",phone)
        formdata.append("password",password) 
        try {
            const response = await axios.post("https://jordanmbuni.alwaysdata.net/api/signup",formdata)
            //update setSuccess
            setSuccess(response.data.message)
            //update setLoading
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
<h1>Signup</h1>
{/* bind the states */}
<h2 className="text-primary">{loading}</h2>
<h2 className="text-success">{success}</h2>
<h2 className="text-warning">{error}</h2>

<form action="" onSubmit={handlesubmit}>
<input type="text" className="form-control" placeholder='Enter username' onChange={(e)=>setUsername(e.target.value)} /><br />
<input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} /><br />
<input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} /><br />
<input type="tel" className="form-control" placeholder="Enter phone"  onChange={(e)=>setPhone(e.target.value)} /><br />

<button type='submit' className='btn btn-primary w-100'>Signup
    </button><br />
<p>Already have an account?<Link to="/signin">Signin</Link></p>

</form>
</div>
</div>
)
}

export default Signup