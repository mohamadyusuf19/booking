import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {textColor} from '../../../styles/globalStyles';
import IntroModal from './components/ModalGroupBooking/IntroModal';
import StepModal from './components/ModalGroupBooking/StepModal';
import InviteModal from './components/ModalGroupBooking/InviteModal';
import {formatNumberWithCommas} from '../../../utils/function';
import OrderModal from './components/ModalGeneralBooking/OrderModal';
import {tickets} from '../../../data/dummy';
import {SelectTicketLogic} from './SelectTicket.logic';
import Header from '../../../components/atoms/Header';

const SelectTicket = ({navigation}) => {
  const {
    introModalRef,
    stepModalRef,
    inviteModalRef,
    orderModalRef,
    snapPoints,
    stepSnapPoints,
    inviteSnapPoints,
    setSelectedTicket,
    handleGroupTicket,
    handleOrderDetail,
    handleStepsModalPress,
    handleInviteModalPress,
    handleFinishModalPress,
    handleBookingModalPress,
    handlePayingModalPress,
    onBookingNow,
    onPayingNow,
    onBack,
  } = SelectTicketLogic(navigation);

  const CardPackages = ({ticket}) => (
    <Pressable
      style={styles.cardPackages}
      onPress={() => {
        handleOrderDetail();
        setSelectedTicket(ticket);
      }}>
      <View style={styles.rowTitle}>
        <Text style={styles.titlePackages}>{ticket.title}</Text>
        <View style={styles.wrapPrice}>
          <Text style={styles.pricePackages}>
            NT$ {formatNumberWithCommas(ticket.price)}
          </Text>
        </View>
      </View>
      <Text style={styles.qty}>qty {ticket.qty}</Text>
      <Text style={styles.desc}>{ticket.desc}</Text>
      {ticket.privileges.map((privilege, idx) => (
        <View style={styles.row} key={idx}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/658/658098.png',
            }}
            style={styles.crown}
          />
          <Text style={styles.feature}>{privilege}</Text>
        </View>
      ))}
    </Pressable>
  );

  const CardTicket = ({ticket}) => (
    <Pressable
      style={styles.cardTicket}
      onPress={() => {
        handleGroupTicket();
        setSelectedTicket(ticket);
      }}>
      <View style={styles.rowTitle}>
        <Text style={styles.titleTicket}>{ticket.title}</Text>
        <View style={styles.wrapPrice}>
          <Text style={styles.priceTicket}>
            NT$ {formatNumberWithCommas(ticket.price)}
          </Text>
        </View>
      </View>
      <Text style={styles.qty}>qty {ticket.qty}</Text>
      <Text style={styles.desc}>{ticket.desc}</Text>
      {ticket.privileges.map((privilege, idx) => (
        <View style={styles.row} key={idx}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/658/658098.png',
            }}
            style={styles.crown}
          />
          <Text style={styles.feature}>{privilege}</Text>
        </View>
      ))}
    </Pressable>
  );

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Header title={'Walk In'} onBack={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.selectTicket}>Select Ticket</Text>
          {tickets.map((ticket, id) => (
            <View key={id}>
              {ticket.type === 'general' ? (
                <CardPackages ticket={ticket} />
              ) : (
                <CardTicket ticket={ticket} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      <BottomSheetModal
        ref={introModalRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: '#262626'}}>
        <IntroModal
          onOpenTutorial={handleStepsModalPress}
          onOpenInvite={handleInviteModalPress}
          onBack={onBack}
        />
      </BottomSheetModal>
      <BottomSheetModal
        ref={stepModalRef}
        index={1}
        snapPoints={stepSnapPoints}
        shouldMeasureContentHeight={true}
        backgroundStyle={{backgroundColor: '#262626'}}>
        <StepModal onFinish={handleFinishModalPress} onBack={onBack} />
      </BottomSheetModal>
      <BottomSheetModal
        ref={inviteModalRef}
        index={1}
        snapPoints={inviteSnapPoints}
        shouldMeasureContentHeight={true}
        backgroundStyle={{backgroundColor: '#262626'}}>
        <InviteModal
          onBack={onBack}
          onBooking={() => {
            handleBookingModalPress();
            onBookingNow();
          }}
        />
      </BottomSheetModal>
      <BottomSheetModal
        ref={orderModalRef}
        index={1}
        snapPoints={inviteSnapPoints}
        backgroundStyle={{backgroundColor: '#262626'}}>
        <OrderModal
          onPay={() => {
            handlePayingModalPress();
            onPayingNow();
          }}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default SelectTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 12,
  },
  selectTicket: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
    color: textColor,
  },
  cardPackages: {
    borderColor: '#EF9533',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 20,
  },
  cardTicket: {
    borderColor: '#5f7ddc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 20,
  },
  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  titlePackages: {
    color: '#EF9533',
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleTicket: {
    color: '#5f7ddc',
    fontSize: 22,
    fontWeight: 'bold',
  },
  wrapPrice: {
    backgroundColor: '#282a2a',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pricePackages: {
    color: '#EF9533',
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceTicket: {
    color: '#5f7ddc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  qty: {
    fontSize: 15,
    color: 'gray',
  },
  desc: {
    fontSize: 16,
    color: textColor,
    marginVertical: 12,
  },
  feature: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  crown: {
    tintColor: 'gray',
    height: 20,
    width: 20,
    marginRight: 5,
  },
});
