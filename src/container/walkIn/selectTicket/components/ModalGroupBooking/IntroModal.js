import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {textColor} from '../../../../../styles/globalStyles';
import Button from '../../../../../components/atoms/Button';
import BackIcon from '../../../../../components/atoms/BackIcon';

const IntroModal = ({onOpenTutorial, onOpenInvite, onBack}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapInvite}>
        <BackIcon onPress={onBack} />
        <Text style={styles.invite}>Invite friends</Text>
        <View />
      </View>
      <ScrollView style={styles.contain} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>WHAT IS GROUP TICKET ?</Text>
        <Text style={styles.desc}>
          Attending an event solo can sometimes feel dull and cost more.
          However, when you come with friends, the experience becomes more
          enjoyable and budget-friendly.
        </Text>
        <Text style={styles.desc}>
          With our group ticket option, you not only secure a reduced price but
          also have the chance to invite your pals along. As the organizer,
          you'll initially cover the group ticket cost, and we'll help you
          generate invoices for your friends.
        </Text>
        <Text style={styles.desc}>
          Get ready for an amazing party experience and let loose on the dance
          floor!
        </Text>
        <Button text={'Continue'} onPress={onOpenInvite} />
        <Text style={{...styles.desc, marginTop: 12}} onPress={onOpenTutorial}>
          Dive deeper with group ticket
        </Text>
      </ScrollView>
    </View>
  );
};

export default IntroModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 12,
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
});
