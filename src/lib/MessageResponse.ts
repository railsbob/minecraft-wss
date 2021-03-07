import WebSocket from 'ws';

class MessageResponse {
  jsonData: any;

  constructor(data: WebSocket.Data) {
    this.jsonData = JSON.parse(data.toString());
  }

  eventName(): string {
    return this.jsonData.body.eventName;
  }

  toString(): string {
    const message = this.jsonData.body.properties.Message;
    return message.replace('[!§r] ', '');
  }
}

export default MessageResponse;
