import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user,setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser= JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  },[]);
  //===========================================================================================================================
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };
  // hide addproduct in Navbar if user is not admin 
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log("admin", admin)
  




  return (
    <section className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md">
          <b><a href="/" className="navbar-brand text-primary">⚡ PREMIUM MOTORS ⚡</a></b>
          <button className="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarcollapse">
            <div className="navbar-nav">
              <a href="/" className="nav-link">GET PRODUCTS</a>
              {/* is admin only button  */}
              {admin?.role === "admin" && (
                <button onClick={()=> navigate("/addproduct")} >
                  Add Product
                </button>
              )}
              
              {user ? (
                <>
                <span className="nav-link">Welcome {user.username}</span>
                <button onClick={logout} className="btn btn-danger">Logout</button>
                </>
              ) : (
                <>
                <a href="/signin" className="nav-link">SIGNIN</a>
                <a href="/signup" className="nav-link">SIGNUP</a>
                </>
              )}
              
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar;