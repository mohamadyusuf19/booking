import {atom} from 'jotai';
import moment from 'moment';

export const bookedListsAtom = atom([
  {
    id: 22211431,
    type: 'general',
    title: 'Couples Packages',
    qty: 50,
    price: 3000,
    desc: 'A package deal for couples with exclusive benefits.',
    privileges: ['Complimentary bootle of campaign', 'Dance floor'],
    hosted: 'Bobby',
    banner:
      'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/09/26050953/Selain-Menghibur-Ini-X-Manfaat-Menyaksikan-Konser-Musik.jpg',
    name: 'Omni Night Club',
    time: '10pm - 4am',
    place: 'Songshou, Taipei City',
    date: moment(new Date()).format('DD MMM'),
    rating: 4.1,
    facilities: [
      {
        title: 'House Made Clothing Brand: Ruff Design',
        desc: 'Rated #1 Hiphop Nightclub in Taiwan',
      },
      {
        title: 'Live performance for signers and rappers',
        desc: 'Rated #1 Hiphop Nightclub in Taiwan',
      },
      {
        title: 'Rated #1 Hiphop Nightclub in Taiwan',
        desc: 'RUFF Taipei was founded in September 2020',
      },
    ],
    friends: [
      {
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Rommy',
        username: '@rommy',
        isInvited: true,
      },
    ],
  },
]);
