import React from 'react'

const Carousel = () => {
  const slides = [
    { id: 1, src: 'images/Ford Ad.jpg', alt: 'Ford' },
    { id: 2, src: 'images/Astonmartin.jpg', alt: 'Aston Martin' },
    { id: 3, src: 'images/Dreams are valid.jpg', alt: 'Dreams' },
    { id: 4, src: 'images/M4.jpg', alt: 'M4' }
  ]

  return (
    <section className="row">
      <div className="col-md-12">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a href="#mycarousel" data-bs-slide="next" className="carousel-control-next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Carousel