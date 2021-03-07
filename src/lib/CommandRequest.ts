import Header from './Header';

interface Command {
    commandLine: string;
  }

interface CommandRequest {
  header: Header;
  body: Command;
}

export default CommandRequest;
