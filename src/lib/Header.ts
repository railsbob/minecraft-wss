import MessagePurpose from './MessagePurpose';

interface Header {
  requestId: string;
  messagePurpose: MessagePurpose;
  version: number;
  messageType: MessagePurpose;
}

export default Header;
