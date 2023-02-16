const server = require('./server');
const port = 3000
const env = 'dev'

server.listen(port, ()=> {
    console.log(`server start on port: ${port} (${env})`)
})


