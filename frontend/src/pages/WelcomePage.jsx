// === Dependences ===
import { useState } from 'react'
// === Components ===
import Header from '../components/Header'
// === Style ===
import './styles/WelcomePage.css'

function WelcomePage() {
  return (
    <div>
        <Header/>
        <div id="main-container">
            <h1>wp</h1>
        </div>
    </div>
  );
}

export default WelcomePage