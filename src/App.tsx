import React from 'react'
import { a } from 'contval/constVal'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Import test {a}</p>
        <p>This is bolierplate for react typescript</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React!
        </a>
      </header>
    </div>
  )
}

export default App
