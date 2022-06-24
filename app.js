const http = require('http')
const { readFileSync } = require('fs')
const port = 5001

const home = readFileSync('./pages/index.html')
const about = readFileSync('./pages/about.html')
const contact = readFileSync('./pages/contact.html')

const server = http.createServer(function (req, res) {
  const url = req.url
  //create web server
  if (url == '/') {
    //check the URL of the current request
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    res.write(home)
    res.end()
  } else if (url == '/home') {
    res.writeHead(302, { Location: '/' })
    res.write(home)
    res.end()
  } else if (url == '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    res.write(about)
    res.end()
  } else if (url == '/contact') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    res.write(contact)
    res.end()
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
