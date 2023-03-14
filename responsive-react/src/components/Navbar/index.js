import React from 'react'
import LeftNavbar from './components/LeftNavbar'
import RightNavbar from './components/RightNavbar'
import './styles.css'


const Navbar = () => {
  return (
    <>
    <div className='container-flex header'>
        <LeftNavbar/>
        <RightNavbar />
    </div>
    </>
  )
}

export default Navbar