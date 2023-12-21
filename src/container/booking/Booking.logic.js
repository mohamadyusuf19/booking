import {useWindowDimensions} from 'react-native';
import {useState} from 'react';

export const BookingLogic = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Paid'},
    {key: 'second', title: 'Unpaid'},
    {key: 'third', title: 'Requested'},
    {key: 'fourth', title: 'Canceled'},
    {key: 'fifth', title: 'Finished'},
  ]);

  return {
    layout,
    index,
    setIndex,
    routes,
  };
};
