import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitStatus('Message sent! ⚡')
    setEmail('')
    setComment('')
    setTimeout(() => setSubmitStatus(''), 3000)
  }

  return (
    <div>
      <section className="row p-3 bg-warning">
        <div className="col-md-4">
          <h2 className="text-center text-white">🚀 ABOUT US</h2>
          <p className="text-white">We sell premium motors and vehicles with unmatched quality. Every vehicle is thoroughly inspected to ensure top-notch standards and customer satisfaction.</p>
        </div>
        <div className="col-md-4">
          <h2 className="text-center text-white">📧 CONTACT US</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br/><br/>
            <textarea 
              className="form-control" 
              placeholder="Leave a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea><br/><br/>
            <input type="submit" className="btn btn-outline-danger" value="Send message" />
            {submitStatus && <p className="text-success mt-2">{submitStatus}</p>}
          </form>
        </div>
        <div className="col-md-4">
          <h2 className="text-center text-white">🔗 STAY CONNECTED</h2>
          <p style={{ marginBottom: '15px' }}>
            <a href="https://facebook.com" className="text-white mx-2 text-decoration-none" title="Facebook">📘 Facebook</a>
            <a href="https://linkedin.com" className="text-white mx-2 text-decoration-none" title="LinkedIn">💼 LinkedIn</a>
            <a href="https://twitter.com" className="text-white mx-2 text-decoration-none" title="Twitter">𝕏 Twitter</a>
          </p>
          <p className="text-white">Find us on social media @premiummotors | Contact: +254 795553217</p>
        </div>
      </section>
      <footer className="p-3 bg-dark text-center">
        <b className="text-white">⚡ Developed by Jordan Kimutai &copy; 2026 ⚡</b>
      </footer>
    </div>
  )
}

export default Footer