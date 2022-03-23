import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../build-ssr/App'

const app = express()

app.use('^/$', (req, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Some error happened')
    }
    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`,
      ),
    )
  })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(8000, () => {
  console.log('App launched on 8000')
})