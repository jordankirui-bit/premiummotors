import React from 'react'

const Carousel = () => {
  return (
    
        <section class="row">
            <div class="col-md-12">
                {/* <!-- a division containing carousel content  --> */}
                <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    {/* <!-- inner division with images  --> */}
                     <div class="carousel-inner">
                        {/* <!-- div with image 1  --> */}
                        <div class="carousel-item active">
                            <img src="images/slide1.jpg" alt="slide 1" />
                        </div>
                        {/* <!-- div with image 2  --> */}
                        <div class="carousel-item">
                            <img src="images/slide2.jpg" alt="slide 2" />
                        </div>
                        {/* <!-- div with image 3  --> */}
                        <div class="carousel-item">
                            <img src="images/slide3.jpg" alt="slide 3" />
                        </div>
                        {/* <!-- div with image 4  --> */}
                        <div class="carousel-item">
                            <img src="images/slide4.jpg" alt="slide 4" />
                        </div>
                    </div>
                    {/* <!-- previous control  --> */}
                    <a href="#mycarousel" data-bs-slide="prev" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    {/* <!-- next control  --> */}
                    <a href="#mycarousel" data-bs-slide="next" class="carousel-control-next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>
            </div>
        </section>
        
  )
}

export default Carousel