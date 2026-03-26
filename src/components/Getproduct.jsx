import axios from 'axios'
import React,{useState,useEffect} from 'react'
import{useNavigate} from 'react-router-dom'
import Carousel from './Carousel';
import Footer from './Footer';

const Getproduct = () => {
  let navigate = useNavigate();
  // declare the states here 
  const [loading,setLoading]=useState("")
  const [products,setProducts]=useState([])
  const [error,setError]=useState("")
  // function to get products 
  const getproducts=async()=>{
    setLoading("Please wait...")
    try {
      const response=await axios.get("https://jordanmbuni.alwaysdata.net/api/getproducts")
      setProducts(response.data)
      setLoading("")
      
    } catch (error) {
      setError("Something went wrong")
      setLoading("")
    }
  }
  //call the function
  
  useEffect(()=>{
    getproducts()

  },[])
  console.log(products);
  const imagepath="https://jordanmbuni.alwaysdata.net/static/images/"
  return (
    <div className='row bg-dark'>
      {/* navbar goes here  */}
      {/* carousel goes here  */}
      <Carousel/>
      <h1 className='text-info'> 😒Available products👌</h1>
      {/* binding the states   */}
      <h2 className='text-warning'>{loading}</h2>
      <h2 className='text-danger'>{error}</h2>
      {/* map the products */}
      {products.map(singleproduct=>( 
        <div className="col-md-3 mb-4">
          <div className="card shadow h-100">
            {/* images go here     */}
            <img src={ imagepath+singleproduct.product_photo} alt="" style={{height:"400px",objectFit:"cover"}}/>
            <div className="card-body">
              <h1>{singleproduct.product_name}</h1>
              <p>{singleproduct.product_description}</p>
              <b className='text-success'>{singleproduct.product_cost}</b><br />
              <button className='btn btn-primary w-100' onClick={()=>navigate("/makepayment",{state:{singleproduct}})}>Purchase Now</button>
            </div>
          </div>
        </div>
       ))}
       {/* footer goes here  */}
       <Footer/>
    </div>
  )
}

export default Getproduct