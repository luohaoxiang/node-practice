// This was a janky lesson I couldn't quite get working
//First http module 
// wont explain every method in this section
//  http module is setting up a server
// uses express 

const http = require('http');

// 2 parameter - objects 
// req is incoming requests 
// response is what you're sending backs

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page')
    }

    if (req.url === '/about') {
        res.end('this is the about page')
    }
    res.end('oops -- error. Wronge page')
   
    //console.log(req)
    // res.write('Welcome to the home page')
    //res.end()
})
//the req object is a GIANT OBJECT with a lot of properties
// the URL property tells you which URL the client is requesting 

// port that the server is listening -- set arbitrary 
server.listen(5005) 

// type in terminal -- node app.js and it it willhang 
// server is running on local host 5000 
// the re



