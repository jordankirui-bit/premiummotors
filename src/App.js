
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

import Addproduct from './components/Addproduct';
import Mpesapayment from "./components/Mpesapayment";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Getproduct from './components/Getproduct';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';





function App() {
  return (
    
    <BrowserRouter>
    <div className="App font-effect " style={{ 
        fontFamily: "Audiowide,sans-serif", 
        fontWeight: "700", 
        letterSpacing: "2px" 
      }}>
      {/* navbar goes here  */}
      
      
      <Navbar/>
      <header className="App-header">
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide&effect=fire-animation|outline|emboss|shadow-multiple"></link> 
       <h1 className='font-effect-shadow-multiple'>Welcome to Premium Motors </h1> 
        
      </header>
    <nav>
      <Link to="/signup" className='btn btn-danger m-2'>Signup 👤</Link>
      <Link to="/signin"  className='btn btn-danger m-2'>Signin 🔓 </Link>
      <Link to="/" className='btn btn-danger m-2'>Get products 🛒</Link>
      
    </nav>
    <Routes>
      <Route path="/" element={<Getproduct/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      
      <Route path="/makepayment" element={<ProtectedRoute><Mpesapayment/></ProtectedRoute>} />
      {/* admin only routes  */}
      <Route path="/addproduct" element={
        <AdminRoute>
          <Addproduct/>
        </AdminRoute>
      } />
      <Route path="/add-product" element={
        <ProtectedRoute adminOnly={true}>
          <Addproduct/>
        </ProtectedRoute>
      } />

    </Routes>

    
    </div>
    </BrowserRouter>
  );
}

export default App;
