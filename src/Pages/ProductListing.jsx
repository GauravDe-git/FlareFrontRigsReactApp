import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Filters from '../Components/Filters'

export default function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{display: 'flex'}}>
        <Filters></Filters>
        <Products></Products>
      </div>
    </div>
  )
}