import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  '../App.css'
import { Search } from '../features/productsSlice'


 const Navbar = () => {
    const {cartProductQuantity} = useSelector((state)=>state.cartProduct)
    const dispatch=useDispatch()
  return (
    <nav className='nav-bar'>
        <Link to='/'  >
            <h2>OnLine Shop</h2>
        </Link>
        <div className="search">
            <input name='search' type='search' onChange={(e)=>(dispatch(Search(e.target.value)))}/>
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor"
                className="fa-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
        <Link to='/cart' >
            <div className="nav-bag">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="30" height="30" fill="currentColor"
                    className="hand-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
                </svg>
                <span className="bag-quantity">
                    <span>{cartProductQuantity}</span>
                </span>
            </div> 
        </Link>
          
    </nav>
  )
}

export default Navbar