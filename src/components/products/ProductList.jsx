import React, { useEffect } from 'react'
import Item from './Item';
import './Products.css'

function ProductList() {

    const [productData, setProductData] = React.useState([])
    
    useEffect(()=> {
        fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
        .then(responce => responce.json())
        .then(data => {
            const list = [];
            for(const key in data){
                list.push(data[key])
            }
            setProductData(list)
        })

        // console.log(list)

    }, [])

    console.log(productData)

  return (
    <div className='mainData'>
        {productData && productData.map(product => {
            return (
                <Item 
                    key = {product.id}
                    id = {product.id}
                    oldPrice = {product.oldPrice}
                    newPrice = {product.newPrice}
                    productImage = {product.productImage}
                    productName = {product.productName}
                    className = 'mainData'
                />   
            )
        })}
    </div>
  )
}

export default ProductList
