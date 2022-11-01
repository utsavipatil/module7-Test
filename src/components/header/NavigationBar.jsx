import React from 'react'
import './NavigationBar.css'
import {AppContext} from '../../Context'

function NavigationBar() {

  const {cartCount} = React.useContext(AppContext)

  return (
    <div className='navbar-light'>
        <div className='collapse navbar-collapse'>
            <div className='navbar-brand'>AccioJob</div>
            <div className='navbar-nav'>
                <div className='home'>Home</div>
                <div className='shop'>Shop</div>
                <div className='about'>About</div>
                <div className='blog'>Blog</div>
                <div className='contact'>Contact</div>
                <div className='pages'>Pages</div>
            </div>
            <div className='navbar-right'>
                {1}
                <img className='likeIcon' src='src\components\Header\like.svg'/>
                {cartCount}
                <img className='cartIcon' src='src\components\Header\cart.svg'/>
                <img className='serachIcon' src='src\components\Header\search.svg'/>
                <div className='loginText'> Login / Register</div>
                <img className='loginIcon' src='src\components\Header\login.svg' />
            </div>
        </div>
    </div>
  )
}

export default NavigationBar