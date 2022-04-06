import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'

export default function Homepage() {
  return (
    <div>
       <Navbar></Navbar>
       <Hero/>
       <Categories/>
    </div>
  )
}
