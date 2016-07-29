require('http').createServer((req, res) => { 
    res.writeHead(301, { Location: `https://${'www.guitarthinker.com'}${req.url}` }); 
    res.end(); 
}).listen(5000);
