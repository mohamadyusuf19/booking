import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

import {textColor} from '../../../styles/globalStyles';
import {SelectDateLogic} from './SelectDate.logic';
import {isEmpty} from '../../../utils/lodash';
import Header from '../../../components/atoms/Header';

const SelectDate = ({navigation}) => {
  const {markedDates, selectedDates, onDayPress, dataDJ} = SelectDateLogic();

  return (
    <View style={styles.container}>
      <Header title={'Walk In'} onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapSelectDate}>
          <Text style={styles.textSelectDate}>Select Date</Text>
        </View>
        <Calendar
          monthFormat={'MMMM yyyy'}
          markingType={'period'}
          style={styles.calendar}
          markedDates={{...markedDates, ...selectedDates}}
          onDayPress={onDayPress}
          onMonthChange={day => {
            console.log(day);
          }}
          minDate={moment().format('YYYY-MM-DD')}
          theme={{
            backgroundColor: '#fff',
            calendarBackground: '#1e1e1e',
            arrowColor: '#fff',
            monthTextColor: '#fff',
            indicatorColor: '#fff',
            dayTextColor: '#fff',
            textDisabledColor: '#313131',
          }}
        />
        <View style={styles.wrapNotes}>
          <View style={styles.notes}>
            <View style={styles.markedToday} />
            <Text style={styles.textMarked}>Today</Text>
          </View>
          <View style={styles.notes}>
            <View style={styles.markedBooked} />
            <Text style={styles.textMarked}>Fully booked</Text>
          </View>
        </View>
        {dataDJ.length > 0 ? (
          <View>
            <Text style={styles.titleDj}>DJ List</Text>
            {dataDJ.map((dj, idx) => (
              <View key={idx} style={styles.row}>
                <View style={styles.wrapAvatar}>
                  <Image source={{uri: dj.avatar}} style={styles.avatar} />
                </View>
                <View>
                  <Text style={styles.name}>{dj.name}</Text>
                  <Text style={styles.time}>{dj.time}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : null}
        {isEmpty(selectedDates) ? null : (
          <Pressable
            style={styles.buttonSelect}
            onPress={() => navigation.push('WalkinTicket')}>
            <Text style={styles.textSelect}>
              Select{' '}
              {moment(`${Object.keys(selectedDates)}`).format('MMM, DD yyyy')}
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default SelectDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 12,
  },
  wrapSelectDate: {
    backgroundColor: '#262626',
    borderRadius: 5,
    padding: 12,
    marginVertical: 12,
  },
  textSelectDate: {
    fontSize: 18,
    color: textColor,
  },
  wrapNotes: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  notes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  markedToday: {
    height: 12,
    width: 12,
    backgroundColor: '#2b437a',
    borderColor: '#1f5eff',
    borderWidth: 1,
    borderRadius: 2,
  },
  markedBooked: {
    height: 12,
    width: 12,
    backgroundColor: '#f04735',
    borderRadius: 2,
  },
  textMarked: {
    fontSize: 16,
    color: textColor,
    marginHorizontal: 5,
  },
  titleDj: {
    marginVertical: 12,
    fontSize: 14,
    color: 'yellow',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    paddingVertical: 12,
  },
  wrapAvatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  time: {
    fontSize: 15,
    color: 'gray',
  },
  buttonSelect: {
    backgroundColor: '#ab5dfb',
    height: 50,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textSelect: {
    fontSize: 18,
    color: textColor,
  },
});
