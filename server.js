const http = require('http');
const fs = require("fs");
const qs = require("qs");

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('views/register.html','utf-8', (err, registerHTML) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(registerHTML);
            res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
    })
        req.on('end', () => {
            console.log(qs.parse(data));
            return res.end('Register success!')
        })
        req.on('error', (err) => {
            throw err;
        })
    }
})

server.listen(8000, 'localhost', function() {
    console.log('server running at http://localhost:8000');
    }
)