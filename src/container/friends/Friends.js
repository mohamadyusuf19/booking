import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {FriendsLogic} from './Friends.logic';
import {textColor} from '../../styles/globalStyles';

const Friends = () => {
  const {friends} = FriendsLogic();

  return (
    <View style={styles.container}>
      <Text style={styles.myBooking}>Friends</Text>
      <ScrollView
        style={{...styles.contain}}
        showsVerticalScrollIndicator={false}>
        {friends.map((friend, idx) => (
          <View style={styles.rowInvite} key={idx}>
            <View style={styles.wrapLeft}>
              <Image source={{uri: friend.avatar}} style={styles.avatar} />
              <View>
                <Text style={styles.textName}>{friend.name}</Text>
                <Text style={styles.textUsername}>{friend.username}</Text>
              </View>
            </View>
          </View>
        ))}
        <View style={{paddingBottom: 80}} />
      </ScrollView>
    </View>
  );
};

export default Friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 12,
  },
  myBooking: {
    fontSize: 22,
    fontWeight: 'bold',
    color: textColor,
    textAlign: 'center',
  },
  contain: {
    flex: 1,
  },
  wrapInvite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  invite: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9800',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    color: textColor,
  },
  desc: {
    fontSize: 16,
    color: textColor,
    textAlign: 'center',
    marginBottom: 12,
  },
  rowInvite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  wrapLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textName: {
    fontSize: 18,
    color: textColor,
  },
  textUsername: {
    fontSize: 16,
    color: '#c1c1c1',
  },
  buttonInvite: {
    backgroundColor: '#313131',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInvite: {
    color: textColor,
  },
  buttonInvited: {
    backgroundColor: '#a85ef5',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInvited: {
    color: textColor,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 12,
    backgroundColor: '#262626',
    width: '100%',
  },
});
