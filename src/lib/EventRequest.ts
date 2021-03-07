import EventName from './EventName';
import Header from './Header';

interface Event {
  eventName: EventName;
}

interface EventRequest {
  header: Header;
  body: Event;
}

export default EventRequest;
