import React from 'react'

const Footer = () => {
  return (
    <div>
         
        <section class="row p-3 bg-warning">
            {/* <!-- child 1 --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">About us</h2>
                <p class="text-white">We sell all kinds of Home Furniture and accaessories just for you.We make sure
                    that we meet topnotch quality</p>
            </div>
            {/* <!-- child 2  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">Contact us</h2>
                <form action="">
                    <input type="email" class="form-control" placeholder="enter your email" /><br/><br/>
                    <textarea name="" id="" class="form-control" placeholder="Leave a comment"></textarea><br/><br/>
                    <input type="submit" class="btn btn-outline-danger" value="Send message" />
                </form>
            </div>
            {/* <!-- child 3  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">Stay connected</h2>
                <a href="facebook.com">
                    <img src="images/fb.png" alt="" />
                </a>
                <a href="">
                    <img src="images/in.png" alt="" />
                </a>
                <a href="">
                    <img src="images/x.png" alt="" />
                </a>
                <p>You can find us on the social media platforms above @tumaini.com</p>
            </div>
        </section>
        <footer class="p-3 bg-dark text-center">
        <b class="text-white">Developed by Jordan Kimutai &copy; 2026</b>
        </footer>
        
    </div>
  )
}

export default Footer