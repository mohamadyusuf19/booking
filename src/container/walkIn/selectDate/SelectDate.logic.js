import React, {useState} from 'react';
import moment from 'moment';
import {useAtom} from 'jotai';
import {selectedDatesAtom} from '../../../store/ticket.store';

const selectedDateCommonStyle = {
  customTextStyle: {color: '#fff', fontWeight: 'bold'},
  customContainerStyle: {backgroundColor: '#1f5eff', borderRadius: 5},
};

const djList = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    name: 'DJ Tonny d`ark',
    time: '10pm - 1am',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
    name: 'Bloody Baby Shark',
    time: '1am - 2am',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/70.jpg',
    name: 'DJ Soda',
    time: '2am - 3am',
  },
];

export const SelectDateLogic = () => {
  const today = moment(new Date()).format('YYYY-MM-DD');

  const [selectedDates, setSelectedDates] = useAtom(selectedDatesAtom);

  const [mode] = useState('default');
  const [markedDates, setMarkedDates] = useState({
    [today]: {
      customTextStyle: {color: '#fff'},
      customContainerStyle: {
        backgroundColor: '#2b437a',
        borderColor: '#1f5eff',
        borderWidth: 2,
        borderRadius: 5,
      },
    },
    '2023-12-26': {
      disabled: true,
      disableTouchEvent: true,
      customTextStyle: {color: '#fff'},
      customContainerStyle: {
        backgroundColor: '#f04735',
        borderRadius: 5,
      },
    },
  });
  const [dataDJ, setDataDJ] = useState([]);

  const onDayPressDefaultMode = day => {
    setSelectedDates(() => {
      if (markedDates[day.dateString]) {
        return {
          [day.dateString]: {
            marked: true,
            selected: true,
            ...markedDates[day.dateString],
            ...selectedDateCommonStyle,
          },
        };
      } else {
        return {
          [day.dateString]: {
            ...selectedDateCommonStyle,
          },
        };
      }
    });
  };

  const onHandleSelectedday = day => {
    setDataDJ(djList);
  };

  const onDayPress = day => {
    switch (mode) {
      case 'default':
        onDayPressDefaultMode(day);
        onHandleSelectedday(day);
        break;
      default:
        break;
    }
  };

  return {mode, selectedDates, markedDates, onDayPress, dataDJ};
};
