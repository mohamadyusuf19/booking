import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {textColor} from '../../../../../styles/globalStyles';
import Button from '../../../../../components/atoms/Button';
import BackIcon from '../../../../../components/atoms/BackIcon';

const steps = [
  {
    number: 1,
    title: 'Group Up',
    desc: 'Gather your friends for an exciting night out.',
  },
  {
    number: 2,
    title: 'Secure Discount',
    desc: 'Select the best date for your group then choose the group ticket option and pay upfront for your crew. Enjoy a discounted rate.',
  },
  {
    number: 3,
    title: 'Invite & Pay',
    desc: 'Invite friends to join your group. We`ll send them invites and handle payments. Get ready to party!',
  },
];

const StepModal = ({onFinish, onBack}) => {
  const [activeSteps, setActiveSteps] = useState(steps[0]);

  const onUpdateSteps = () => {
    const data = steps.find(step => step.number === activeSteps.number + 1);
    setActiveSteps(data);
  };

  const onSkip = () => {
    const data = steps.find(step => step.number === 3);
    setActiveSteps(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapInvite}>
        <BackIcon onPress={onBack} />
        <Text style={styles.invite}>Invite friends</Text>
        <View />
      </View>
      <ScrollView style={styles.contain} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          Step {activeSteps.number}: {activeSteps.title}
        </Text>
        <Text style={styles.desc}>{activeSteps.desc}</Text>
        {activeSteps.number === 1 || activeSteps.number === 2 ? (
          <View>
            <Button text={'Continue'} onPress={onUpdateSteps} />
            <Text style={{...styles.desc, marginTop: 12}} onPress={onSkip}>
              Skip it
            </Text>
          </View>
        ) : (
          <Button text={'Finish'} onPress={onFinish} />
        )}
      </ScrollView>
    </View>
  );
};

export default StepModal;

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
