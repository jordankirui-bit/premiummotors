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
  const [sortOption,setSortOption]=useState("")
  const [search,setSearch]=useState("")
  const [visibleCount,setVisibleCount]=useState(8); // for load more functionality

  //filter products logic goes here
  const filteredProducts=products.filter((item)=>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );
  // sorting logic goes here 
  const sortedProducts=filteredProducts.sort((a,b)=>{
    if(sortOption==="price-low-to-high"){
      return a.product_cost-b.product_cost
    }
    if(sortOption==="price-high-to-low"){
      return b.product_cost-a.product_cost
    }

    if(sortOption==="name_asc"){
      return a.product_name.localeCompare(b.product_name);
    }
    if(sortOption==="name_desc"){
      return b.product_name.localeCompare(a.product_name)
    }
    return 0;
  });

  



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


      <Carousel/>

      


      <h5 className='text-center text-info mt-3'>Search and sort cars to find your perfect match!</h5>
      <div className="row justify-content-center mt-3 mb-4">
        {/* search  */}
        <div className="col-md-4 mb-2">
          <input
            type="text"
            placeholder="Search vehicles..."
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* sort  */}
        <div className="col-md-4 mb-2">
          <select
            className="form-control"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by...</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      
      
      <h1 className='text-info p-3'>⚡ AVAILABLE VEHICLES ⚡</h1>
      {loading && <h2 className='text-warning text-center'>{loading}</h2>}
      {error && <h2 className='text-danger text-center'>{error}</h2>}
      {sortedProducts.slice(0, visibleCount).map((singleproduct) => ( 
        <div key={singleproduct.id || singleproduct.product_id || Math.random()} className="col-md-3 mb-4">
          <div className="card shadow h-100">
            <img src={imagepath + singleproduct.product_photo} alt={singleproduct.product_name} style={{height:"400px",objectFit:"cover"}}/>
            <div className="card-body">
              <h1>{singleproduct.product_name}</h1>
              <p>{singleproduct.product_description}</p>
              <b className='text-success'>KSH {singleproduct.product_cost}</b><br />
              <button className='btn btn-success w-100' onClick={()=>navigate("/makepayment",{state:{singleproduct}})}>🛒 PURCHASE NOW</button>
            </div>
          </div>
        </div>
       ))}
       {/* add load more button  */}
       {visibleCount < sortedProducts.length && (
        <div className=" text-center mb-4">
          <button className="btn btn-primary" onClick={() => setVisibleCount(visibleCount + 8)}>
            Load More
          </button>
        </div>
       )}
       <Footer/>
    </div>
  )
}

export default Getproduct