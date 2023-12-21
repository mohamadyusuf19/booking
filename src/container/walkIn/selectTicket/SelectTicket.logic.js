import {useCallback, useMemo, useRef} from 'react';
import moment from 'moment';
import {useAtom} from 'jotai';

import {
  friendsAtom,
  selectedDatesAtom,
  selectedTicketAtom,
} from '../../../store/ticket.store';
import {bookedListsAtom} from '../../../store/booking.store';
import {selectedEventAtom} from '../../../store/event.store';
import {generateRandomNumber} from '../../../utils/function';

export const SelectTicketLogic = navigation => {
  const introModalRef = useRef(null);
  const stepModalRef = useRef(null);
  const inviteModalRef = useRef(null);
  const orderModalRef = useRef(null);

  const [selectedTicket, setSelectedTicket] = useAtom(selectedTicketAtom);
  const [selectedEvent] = useAtom(selectedEventAtom);
  const [friends, setFriends] = useAtom(friendsAtom);
  const [bookedLists, setBookedLists] = useAtom(bookedListsAtom);
  const [selectedDates] = useAtom(selectedDatesAtom);

  // callbacks
  const handleGroupTicket = useCallback(() => {
    introModalRef.current?.present();
  }, []);

  const handleOrderDetail = useCallback(() => {
    orderModalRef.current?.present();
  }, []);

  const handleStepsModalPress = useCallback(() => {
    stepModalRef.current?.present();
    introModalRef.current?.dismiss();
  }, []);

  const handleInviteModalPress = useCallback(() => {
    inviteModalRef.current?.present();
    introModalRef.current?.dismiss();
  }, []);

  const handleFinishModalPress = useCallback(() => {
    inviteModalRef.current?.present();
    stepModalRef.current?.dismiss();
  }, []);

  const handleBookingModalPress = useCallback(() => {
    inviteModalRef.current?.dismiss();
  }, []);

  const handlePayingModalPress = useCallback(() => {
    inviteModalRef.current?.dismiss();
  }, []);

  const onBookingNow = () => {
    const inactiveInvitedFriends = friends.map(friend => ({
      ...friend,
      isInvited: false,
    }));
    const filterFriends = friends.filter(friend => friend.isInvited);
    setBookedLists([
      {
        ...selectedEvent,
        ...selectedTicket,
        id: generateRandomNumber(),
        friends: filterFriends,
        date: moment(`${Object.keys(selectedDates)}`).format('DD MMM'),
      },
      ...bookedLists,
    ]);
    setFriends(inactiveInvitedFriends);
    navigation.push('Main');
  };

  const onPayingNow = () => {
    const filterFriends = [];
    setBookedLists([
      {
        ...selectedEvent,
        ...selectedTicket,
        id: generateRandomNumber(),
        friends: filterFriends,
        price: selectedTicket.price - (selectedTicket.price * 5) / 100,
        date: moment(`${Object.keys(selectedDates)}`).format('DD MMM'),
      },
      ...bookedLists,
    ]);
    navigation.push('Main');
  };

  const onBack = () => {
    introModalRef.current?.dismiss();
    stepModalRef.current?.dismiss();
    inviteModalRef.current?.dismiss();
    orderModalRef.current?.dismiss();
  };

  const snapPoints = useMemo(() => ['25%', '60%'], []);
  const stepSnapPoints = useMemo(() => ['40%', '40%'], []);
  const inviteSnapPoints = useMemo(() => ['70%', '70%'], []);

  return {
    introModalRef,
    stepModalRef,
    inviteModalRef,
    orderModalRef,
    snapPoints,
    stepSnapPoints,
    inviteSnapPoints,
    setSelectedTicket,
    handleGroupTicket,
    handleOrderDetail,
    handleStepsModalPress,
    handleInviteModalPress,
    handleFinishModalPress,
    handleBookingModalPress,
    handlePayingModalPress,
    onBookingNow,
    onPayingNow,
    onBack,
  };
};
