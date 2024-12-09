import React from 'react'
import Nava from '../componets/nav'
import Heading from'../componets/Heading'
import Products from '../componets/products'
import { Link } from 'react-router-dom'


const LandingPages = () => {
  return (
    <div>

     <Nava/>
     <Heading/>
     <Products/>
    
      
    </div>
  )
}

export default LandingPages
