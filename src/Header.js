import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Header = () => {
  return (
    <div>
        
      < ul >
      <li>
        <Link to='/'  className='new'>Home</Link></li>
      <li><Link to='/b' className='new' >Bollywood</Link></li>
      <li><Link to='/t' className='new' >Technology</Link></li>
      <li><Link to='/h' className='new' >Hollywood</Link></li>
      <li><Link to='/f' className='new' >Fitness</Link></li>
      <li><Link to='/food' className='new'>Food</Link></li>
      </ul>
    </div>
  )
}

export default Header
