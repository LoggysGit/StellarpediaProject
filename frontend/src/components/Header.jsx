import { useState } from 'react'
import './styles/Header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src="" alt="Logo"/>
        <div>
          <a>Welcome Page</a>
          <a>About Us</a>
          <a>Archive</a>
          <a>Astral Path</a>
          <a>Interacts</a>
          <a>CosmAI</a>
          <a>Subscription</a>
          <a>Contacts& Support</a>
        </div>
        <div>
            <div>
                <button><img src="" alt="Theme"/></button>
                <button></button>
            </div>
            <button><img src="" alt="Profile"/></button>
        </div>
      </header>
    </>
  )
}

export default Header
