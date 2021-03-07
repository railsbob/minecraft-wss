import WebSocket from 'ws';

import EventName from './lib/EventName';
import MessageResponse from './lib/MessageResponse';
import {createSubscribeCommand, createEchoCommand} from './commands/factories';

// eslint-disable-next-line no-process-env
const PORT = process.env.PORT || '25565';

const server = new WebSocket.Server({port: parseInt(PORT, 10)});

server.on('connection', (websocket) => {
  const subscribePlayerMessage = createSubscribeCommand(EventName.PlayerMessage);
  websocket.send(JSON.stringify(subscribePlayerMessage));

  websocket.on('message', (data) => {
    const message = new MessageResponse(data);

    if (message.eventName() === EventName.PlayerMessage) {
      const returnCommand = createEchoCommand(message.toString());
      websocket.send(JSON.stringify(returnCommand));
    }
  });
});
