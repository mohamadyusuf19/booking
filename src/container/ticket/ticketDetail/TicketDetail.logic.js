import {useRef} from 'react';
import {useAtom} from 'jotai';

import {selectedEventAtom} from '../../../store/event.store';
import {events} from '../../../data/dummy';
import {selectedDatesAtom} from '../../../store/ticket.store';

export const TicketDetailLogic = () => {
  const ref = useRef(null);
  const [selectedEvent, setSelectedEvent] = useAtom(selectedEventAtom);
  const [, setSelectedDates] = useAtom(selectedDatesAtom);

  const availableOffers = events.filter(
    event => event.name !== selectedEvent.name,
  );

  return {
    ref,
    selectedEvent,
    setSelectedEvent,
    availableOffers,
    setSelectedDates,
  };
};
