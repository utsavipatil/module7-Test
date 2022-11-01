import React from 'react'
import ProductList from './ProductList'
import './Products.css'

function products() {
  return (
    <div>
        <img className='container-fluid' src='src\components\container-fluid.jpg'/>
        <div>
          <ProductList/>
        </div>
    </div>
  )
}

export default products