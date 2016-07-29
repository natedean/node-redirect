require('http').createServer((req, res) => { 
    res.writeHead(301, { Location: `https://${'www.my-website.com'}${req.url}` }); 
    res.end(); 
}).listen();
