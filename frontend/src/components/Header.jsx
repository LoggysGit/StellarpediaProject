import { useState } from 'react'
import './styles/Header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src="" alt="Logo"/>
        <div>
          <a className='header-refer'>Welcome Page</a>
          <a className='header-refer'>About Us</a>
          <a className='header-refer'>Archive</a>
          <a className='header-refer'>Astral Path</a>
          <a className='header-refer'>Interacts</a>
          <a className='header-refer'>CosmAI</a>
          <a className='header-refer'>Subscription</a>
          <a className='header-refer'>Contacts& Support</a>
        </div>
        <div>
            <div>
                <button><img src="" alt="Theme"/></button>
                <button>ENG</button>
            </div>
            <button><img src="" alt="Profile"/></button>
        </div>
      </header>
    </>
  )
}

export default Header
