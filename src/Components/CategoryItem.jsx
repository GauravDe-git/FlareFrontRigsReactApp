import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
    return(
        <div className='containerItem'>
            <img src={item.img} alt="" className="Image" />
            <div className="info">
                <h1 className="categoryName">{item.categoryName}</h1>
                <Link to= "ProductListing/"><button className='btn-primary'>SHOP NOW!</button></Link> 
            </div>
        </div>
    )
}

export default CategoryItem
