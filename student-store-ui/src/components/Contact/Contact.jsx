import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className="content">
        <h3>Reach out to us!</h3>
        <div className="summary">
          <ul className='info'>
            <li>
              <span class="label">Email</span>
              <span class="label">: code@path.org</span>
            </li>

            <li>
              <span class="label">Phone</span>
              <span class="label">: 123-456-7890</span>
            </li>

            <li>
              <span class="label">Address</span>
              <span class="label">: code@path.org</span>
            </li>

            <li>
              <span class="label">Socials</span>
              <span class="label">: code@path.org</span>
            </li>
            
          </ul>

          <div className="media">
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact