const WebSocket = require('ws');

const wss = new WebSocket.Server({port:3333});

let clients = [];
let i = 0;
wss.on('connection', (client)=>{
    clients.push(client);
    client.id = i++;
    client.on('message', (msg)=>{
        let message = JSON.parse(msg);
        if(message.type === 'message'){
            clients.forEach(user => {
                if (user.id !== client.id) {
                    user.send(JSON.stringify({
                        type: 'message',
                        data: {
                            username: client.name,
                            user: client.id,
                            message: message.data,
                            time: new Date()
                        }
                    }));
                }
            });
        }else if(message.type === 'join'){
            client.name = message.data;
        }

    });
});