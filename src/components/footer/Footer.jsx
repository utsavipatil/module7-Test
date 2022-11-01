import React from 'react'
import './Footer.css'

function Footer() {

  const [email, setEmail] = React.useState('')

  //POST request on mail
  const handleSubmitMail = () => {
    fetch('https://accio-moduletest-mail-default-rtdb.asia-southeast1.firebasedatabase.app/mail.json',
      {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            customerMail : email
        })
      }
    )
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      setEmail('');
      alert('Your mail saved in our database Successfully!')
    })
  }

  return (
    <div className='footer'>
      <div className='accioJob'>
        <h3>AccioJob</h3>
        <img className='fb' src='src\components\footer\facebook.svg'/>
        <img className='instra' src='src\components\footer\instragram.svg'/>
        <img className='twitter' src='src\components\footer\twitter.svg'/>
      </div>
      <hr/>
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
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Your Email' />
              </div>
              <div className='part2'>
                <button onClick={handleSubmitMail} type='submit'>Subscribe</button>
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