import {v4 as uuidv4} from 'uuid';

import CommandRequest from '../lib/CommandRequest';
import EventName from '../lib/EventName';
import EventRequest from '../lib/EventRequest';
import MessagePurpose from '../lib/MessagePurpose';

function createSubscribeCommand(eventName: EventName): EventRequest {
  return {
    header: {
      messagePurpose: MessagePurpose.Subscribe,
      messageType: MessagePurpose.Command,
      requestId: uuidv4(),
      version: 1,
    },
    body: {
      eventName,
    },
  };
}

function createEchoCommand(command: string): CommandRequest {
  return {
    header: {
      requestId: uuidv4(),
      messagePurpose: MessagePurpose.Command,
      version: 1,
      messageType: MessagePurpose.Command,
    },
    body: {
      commandLine: command,
    },
  };
}

export {
  createSubscribeCommand,
  createEchoCommand,
};
