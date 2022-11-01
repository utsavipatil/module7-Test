import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>

      <div className='companyInfo'>
          <div className='c1'>
            <h5>Company Info</h5>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className='c2'>
            <h5>Legal</h5>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className='c3'>
            <h5>Features</h5>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div className='c4'>
            <h5>Resources</h5>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
          <div className='c5'>
            <h5>Get In Touch</h5>
            <div className='input'>
              <div className='part1'>
                <input type='text' placeholder='Your Email' />
              </div>
              <div className='part2'>
                <button type='submit'>Subscribe</button>
              </div>
            </div>
            <p>Lorem impsum dolor amit</p>
          </div>
      </div>

      <div className='last'>
        <div className='lastText'> Made With ❤️ at AccioJob </div> 
      </div>
    </div>
  )
}

export default Footer