import {useAtom} from 'jotai';
import {selectedEventAtom} from '../../store/event.store';

export const EventLogic = navigation => {
  const [, setSelectedEvent] = useAtom(selectedEventAtom);

  const onSelectedEvent = event => {
    setSelectedEvent(event);
    navigation.push('TicketDetail');
  };

  return {
    onSelectedEvent,
  };
};
