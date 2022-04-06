import React from 'react'
import './Categories.css'

const CategoryItem = ({item}) => {
    return(
        <div className='containerItem'>
            <img src={item.img} alt="" className="Image" />
            <div className="info">
                <h1 className="categoryName">{item.categoryName}</h1>
                <button className='btn-primary'>SHOP NOW!</button>
            </div>
        </div>
    )
}

export default CategoryItem
