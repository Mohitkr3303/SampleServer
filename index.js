const http = require("http");
const fs = require("fs");

const Home = fs.readFileSync("./index.html","utf-8");

console.log(__filename);



const PORT = 2000;
const hostname = "localhost"

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        return res.end(Home);
    }
    if(req.url === '/about'){
        return res.end("<h1>About Page</h1>");
    }
    if(req.url === '/contact'){
        return res.end("<h1>Contact Page</h1>");
    }
    if(req.url === '/service'){
        return res.end("<h1>Service Page</h1>");
    }
    else{
       return res.end("<h1>404 Page</h1>");
    }
});

server.listen(PORT,hostname,()=>{
    console.log(`Server is running on port http://${hostname}:${PORT}`);
})


