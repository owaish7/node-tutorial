// const EventListener = require('events');

// const Logger= require('./logger');
// const logger = new Logger();

// // Register a listener
// logger.on('messageLogged',(arg)=>{
//     console.log('Listener called',arg);
// }
// );

// logger.log('message');


const http = require('http');

const server = http.createServer();

server.on('connection',(socket)=>{
    console.log('New connection...');
}
);

server.listen(3000);
console.log('Listening on port 3000...');