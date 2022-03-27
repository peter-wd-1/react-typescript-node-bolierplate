import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Import test </p>
        <p>This is bolierplate for react typescript</p>
      </header>
    </div>
  )
}

const app = express()

app.use('^/$', (req, res) => {
  res.send(`<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`)
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(8000, () => {
  console.log('App launched on 8000')
})
