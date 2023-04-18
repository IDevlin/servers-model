const server = require('./server');
const {env, port} = require('./config/index')

//const database = require('./database.js');
//const dbInstance = () => database.getDbInstance()
server.listen(port, ()=> {
    console.log(`server start on port: ${port} (${env})`)
    //dbInstance()
	//console.log("DB")
})
