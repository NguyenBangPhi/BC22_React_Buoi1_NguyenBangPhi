import React from 'react'
import Carousel from './Carousel'
import Laptop from './Laptop'
import Navbar from './Navbar'
import Promotion from './Promotion'
import Smartphone from './Smartphone'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Smartphone/>
        <Laptop/>
        <Promotion/>
    </div>
  )
}
