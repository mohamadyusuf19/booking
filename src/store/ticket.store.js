import {atom} from 'jotai';

export const selectedTicketAtom = atom(null);
export const selectedDatesAtom = atom({});
export const friendsAtom = atom([
  {
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Rommy',
    username: '@rommy',
    isInvited: false,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/71.jpg',
    name: 'Jean Chen',
    username: '@jean',
    isInvited: false,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
    name: 'Joana Chan',
    username: '@jhoana',
    isInvited: false,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/73.jpg',
    name: 'Kimi Wong',
    username: '@kimi',
    isInvited: false,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/74.jpg',
    name: 'We Jun',
    username: '@we',
    isInvited: false,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
    name: 'Lindan',
    username: '@lindan',
    isInvite: false,
  },
]);
