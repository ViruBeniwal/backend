const http = require('http');;

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == '/') res.end("Home Page");
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write("<h1>This is about me....</h1>");
        res.write("<h2> I am Virendra </h2>")
        res.end();
    }
    else if(req.url === '/favicon.ico'){
        res.writeHead(204);
        res.end();
    }
    else{
        res.writeHead(404, {'content-type':'text/html'});
        res.write("<h1>404</h1>");
        res.write("<h2> page not found </h2>")
        res.end();
    }
})

server.listen(3000, ()=>{
    console.log("Listening...  ");
})
