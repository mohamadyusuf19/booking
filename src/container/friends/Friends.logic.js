import {useAtom} from 'jotai';

import {friendsAtom} from '../../store/ticket.store';

export const FriendsLogic = () => {
  const [friends] = useAtom(friendsAtom);

  return {
    friends,
  };
};
