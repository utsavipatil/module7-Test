import React from 'react'
import './Item.css'
import {AppContext} from '../../Context'

function Item({ key , id , oldPrice , newPrice , productImage , productName}) {

  const {cartCount , setCartCount} = React.useContext(AppContext)

  const handleClick = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div className='item-container'>
        <img className='Image' src= {productImage}/>
        <p className='name'> {productName} </p>
        <div className='desc'>
          <div className='star'>
            <img src='src\components\products\Star.svg' />
            <img src='src\components\products\Star.svg' />
            <img src='src\components\products\Star.svg' />
            <img src='src\components\products\Star.svg' />
          </div>
          <div className='price'>
            <p className='oldprice'> {oldPrice} </p> <span className='oldSpan'>/-</span>
            <p className='newprice'> {newPrice} </p> <span className='newSpan'>/-</span>
          </div>
        </div>
          <button onClick={handleClick} className='rectangle'>ADD TO CART</button>
    </div>
  )
}

export default Item