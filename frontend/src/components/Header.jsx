import { useState } from 'react'
import './styles/Header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src="" alt="Logo"/>
        <div>

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
