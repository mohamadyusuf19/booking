import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {textColor} from '../../styles/globalStyles';
import {events} from '../../data/dummy';
import {EventLogic} from './Event.logic';

const Event = ({navigation}) => {
  const {onSelectedEvent} = EventLogic(navigation);

  return (
    <View style={styles.container}>
      <Text style={styles.myBooking}>Event</Text>
      <View style={styles.contain}>
        <ScrollView
          style={{...styles.contain}}
          showsVerticalScrollIndicator={false}>
          {events.map((event, idx) => (
            <Pressable
              style={styles.card}
              key={idx}
              onPress={() => onSelectedEvent(event)}>
              <View style={styles.wrapContent}>
                <Image source={{uri: event.banner}} style={styles.icon} />
                <View style={styles.contentCenter}>
                  <Text style={styles.contentTitle}>{event.name}</Text>
                  <Text style={styles.contentDesc}>{event.place}</Text>
                  <Text style={styles.invitePeople}>{event.time}</Text>
                </View>
                <View style={styles.contentFooter}>
                  <View style={styles.wrapType}>
                    <Text style={styles.type}>See Detail</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
          <View style={{paddingBottom: 80}} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 12,
  },
  contain: {
    flex: 1,
  },
  myBooking: {
    fontSize: 22,
    fontWeight: 'bold',
    color: textColor,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    color: textColor,
  },
  card: {
    backgroundColor: '#262626',
    borderRadius: 8,
    marginVertical: 12,
    paddingVertical: 12,
  },
  wrapType: {
    borderColor: textColor,
    borderWidth: 1,
    borderRadius: 3,
    height: 30,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  type: {
    fontSize: 14,
    color: textColor,
  },
  contentCenter: {
    width: '47%',
  },
  wrapContent: {
    flexDirection: 'row',
    textAlign: 'center',
    width: '100%',
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: '#2e2e2e',
    borderRadius: 8,
    marginHorizontal: 12,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  contentDesc: {
    fontSize: 14,
    color: textColor,
  },
  invitePeople: {
    fontSize: 12,
    color: '#c1c1c1',
  },
  contentFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
