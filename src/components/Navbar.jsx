import React from 'react'

const Navbar = () => {
  return (
     <section class="row">
            <div class="col-md-12">
                {/* <!-- a navv with navbar content  --> */}
                <nav class="navbar navbar-expand-md ">
                    <b><a href="" class="navbar-brand text-primary">Premium  Motors</a></b>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links   --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link">Get Products</a>
                            <a href="/Addproduct" class="nav-link">Add product</a>
                            <a href="/signup" class="nav-link">Signup</a>
                            <a href="/signin" class="nav-link">Signin</a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
  )
}

export default Navbar