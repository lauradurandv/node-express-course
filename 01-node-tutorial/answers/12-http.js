//Using the http module: allow us to set up a web server

const http = require('http');

//Using create server method: require a callback 

//Para1: request Para2:response
const server = http.createServer((req,res) => {
    //if request url equal home page send back
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    } else if
    //if url request equals about page
    (req.url === '/about'){
        res.end('Welcome to the about page.')
    } else
    //page doesn't exist
    res.end(`
        <h1>Opps...</h1>
        <p>We cant seem to find the page your are looking for.</p>
        <a href="/">back home</a>
    `)

})

//specify the port it is listening on 
server.listen(3000);