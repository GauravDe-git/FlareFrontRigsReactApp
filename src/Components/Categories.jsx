import React from 'react'
import { categories } from '../backend/db/categories'
import CategoryItem from './CategoryItem'
import './Categories.css'

export default function Categories() {
  return (
    <>
    <h1 style={{textAlign: 'center'}}>SHOP BY CATEGORIES!</h1>
    <div className='container'>
      {
          categories.map(item=>(
              <CategoryItem item= {item} key={item._id}/>
          ))
      }
    </div>
    </>
  )
}
