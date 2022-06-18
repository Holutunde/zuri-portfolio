const http = require('http') // Import Node.js core module
const fs = require('fs')
const port = 5001

const server = http.createServer(function (req, res) {
  const url = req.url
  //create web server
  if (url == '/') {
    //check the URL of the current request
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    fs.readFile('./pages/index.html', null, function (error, data) {
      if (error) {
        res.writeHead(404)
        res.write('Whoops! File not found!')
      } else {
        res.write(data)
      }
      res.end()
    })
  } else if (url == '/home') {
    res.writeHead(302, { Location: '/' })
    res.end()
  } else if (url == '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    fs.readFile('./pages/about.html', null, function (error, data) {
      if (error) {
        res.writeHead(404)
        res.write('Whoops! File not found!')
      } else {
        res.write(data)
      }
      res.end()
    })
  } else if (url == '/contact') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    fs.readFile('./pages/contact.html', null, function (error, data) {
      if (error) {
        res.writeHead(404)
        res.write('Whoops! File not found!')
      } else {
        res.write(data)
      }
      res.end()
    })
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(port, () => {
  console.log(`Server is listening on port number: ${port}`)
})
