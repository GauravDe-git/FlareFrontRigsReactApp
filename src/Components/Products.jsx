import React from 'react'
import { products } from '../backend/db/products'
import Product from './Product'
import './products.css'


const Products = () => {
    return (
        <div className='products-container'>
            {
                products.map((item) => (
                    <Product item={item} key={item._id}/>
                ))
            }
        </div>
    )
}

export default Products 

